import { useEffect, useState } from "react";




const RankedList = ({postId}) => {

    const [rankedArraay,setRankedArray] = useState([])
    const [info,setInfo] = useState({post_visits:12,post_ranked_by:12})
    
    useEffect( () =>{
       fetch(`http://localhost:5000/get/rankedlist/${postId}`).then((res) => {
        res.json().then((res) => {
            setRankedArray(res[0])
            setInfo(res[2][0])
        })})
       
        

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
                    <img className="ranked_image" src={value.image_url}  />
                </div>
            ))}
        </div>
     );
}
 
export default RankedList;