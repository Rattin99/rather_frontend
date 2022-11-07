import { Box,Text,Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { serverUrl } from "../utils/url";




const RankedList = ({postId}) => {

    const [rankedArraay,setRankedArray] = useState([])
    const [info,setInfo] = useState({post_visits:0,post_ranked_by:0})
    
    useEffect( () =>{
       const controller = new AbortController();
       const signal = controller.signal;

       fetch(`${serverUrl}/get/rankedlist/${postId}`,{signal}).then((res) => {
        res.json().then((res) => {
            setRankedArray(res[0])
            setInfo(res[2][0])
        })})

        return () => controller.abort();
    },[postId])

   
    
    return ( 
        <div className="rankedList">
            <div className="info_container">
                <div className="info">
                    <h2 className="post_visits">
                     views: {info.post_visits} 
                    </h2>
                    <h2 className="post_ranked_by">
                     ranked by: {info.post_ranked_by}
                    </h2>
                </div>
            </div>
            {rankedArraay.map((value,index) => (
                <div className="ranked_item" key={index}> 
                    <h1 className="rank">{index+1}</h1>
                    <Box margin='10px'>
                        <Image className="ranked_image" src={value.image_url}  />
                        <Text align='center'>{value.caption}</Text>
                    </Box>
                </div>
            ))}
        </div>
     );
}
 
export default RankedList;