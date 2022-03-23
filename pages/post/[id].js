import Container from '../../components/Container'
import Game from '../../components/Game';
import { useState,useEffect } from 'react';
import UploaderPage from '../../components/UploaderPage';
import { Box } from '@chakra-ui/react';




const Compare = () => {

    const [imgArray,setArray] = useState();
    

    const getimages = async () => {
        const res = await fetch(
          `https://picsum.photos/v2/list`
        );
        const images = await res.json();
        
        setArray(images)
      };

    useEffect(()=>{
        getimages()
      },[])


      
    return ( 
        <Container> 
            {imgArray && (<Game imageArray = {imgArray} />)}
        </Container>
     );
}
 
export default Compare;