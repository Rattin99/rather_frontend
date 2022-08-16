import Container from '../../components/Container'
import Game from '../../components/Game';
import { useState,useEffect } from 'react';
import { useRouter  } from 'next/router';




const Compare = () => {
    const [imgArray,setArray] = useState();
    const router = useRouter();
    const id = router.query.id;
    

    const getimages = async () => {
      const res = await fetch(`http://localhost:5000/urls/${id}`);
      const images = await res.json();
      setArray(images)
    }

    useEffect(()=> getimages(), [])


      
    return ( 
        <Container> 
            {imgArray && (<Game imageArray = {imgArray} postId = {id} />)}
        </Container>
     );
}
 
export default Compare;