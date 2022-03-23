import { Box, Text} from "@chakra-ui/react";
import {  useState } from "react";
import ImageBox from "./ImageBox";

const Game = ({imageArray}) => {

    const [activeIndex,setActiveIndex] = useState([0,1]);


    const isActive = (i) =>{
       return activeIndex.includes(i);
    }

    const getLarger = (a,b) =>{
        if(a>b) return a;
        if(b>a) return b;
    }


    const HandleSelect = (e) =>{
      
        try{
            const targetIndex =   e.target.attributes.index.value;
            const index1 = activeIndex[0];
            const index2 = activeIndex[1];

            if(index1 == targetIndex) setActiveIndex([index1,getLarger(index1,index2)+1]);
            if(index2 == targetIndex) setActiveIndex([getLarger(index1,index2)+1,index2]);
        }catch(err){
            console.log(err)
        }

    }


      
    
    return ( 
        <Box  display='flex' h='80vh' flexDirection='column' alignItems='center' justifyContent='space-around' >
            <Text maxH={{base:'10vh',lg:'20vh'}} fontSize={{base:'sm',lg:'md'}}  textAlign='center' >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, quam dolor aliquid deleniti laboriosam adipisci veniam dignissimos laborum, at incidunt omnis nesciunt nulla molestias ipsa neque autem? Facere, fugit inventore?</Text>
           <Box onClick={HandleSelect} w={{lg:'70vw', base:'100vw'}} display='flex' flexDirection={{base:'column',lg:'row'}} alignItems='center' justifyContent='center'> 
               {
                   imageArray.map((value,index)=>
                   isActive(index) && (
                    <ImageBox  handleselect = {HandleSelect}  key={index} src={value.download_url} index={index} />
                )
                   )
               }
           </Box>
        </Box>
     );
}
 
export default Game;