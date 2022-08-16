import { Box, Text} from "@chakra-ui/react";
import {  useState } from "react";
import ImageBox from "./ImageBox";
import eloRank from "../utils/elo";

const Game = ({imageArray,postId}) => {

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
            const l = imageArray.length - 1; 
            if(index1 <= l && index2 <= l){
               
                const opIndex = (targetIndex == index1) ? index2 : index1;

                const w = imageArray[targetIndex];
                const l = imageArray[opIndex];

                const result = eloRank(w.ranking,l.ranking);

                imageArray[targetIndex].ranking = result.newWrank;
                imageArray[opIndex].ranking = result.newLrank;

                
                if(index1 == targetIndex) setActiveIndex([index1,getLarger(index1,index2)+1]);
                if(index2 == targetIndex) setActiveIndex([getLarger(index1,index2)+1,index2]);
            }

            if(index1 == l || index2 == l){
                fetch(`http://localhost:5000/post/rank/${postId}`,{
                    method: 'POST',
                    headers: {"Content-Type":"application/json"},
                    body: JSON.stringify({
                        imageArray
                    })
                }).then(res =>{
                    console.log(res);
                })
            }
        }catch(err){
            console.log(err)
        }

    }


      
    
    return ( 
        <Box  display='flex' h='80vh' flexDirection='column' alignItems='center' justifyContent='space-around' >
            <Text maxH={{base:'10vh',lg:'20vh'}} fontSize={{base:'sm',lg:'md'}}  textAlign='center' >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, quam dolor aliquid deleniti laboriosam adipisci veniam dignissimos laborum, at incidunt omnis nesciunt nulla molestias ipsa neque autem? Facere, fugit inventore?</Text>
           <Box overflow='hidden' onClick={HandleSelect} w={{lg:'70vw', base:'100vw'}} display='flex' flexDirection={{base:'column',lg:'row'}} alignItems='center' justifyContent='center'> 
               {
                   imageArray.map((value,index)=>
                   isActive(index) && (
                    <ImageBox  handleselect = {HandleSelect}  key={index} src={value.image_url} index={index} />
                )
                   )
               }
           </Box>
        </Box>
     );
}
 
export default Game;