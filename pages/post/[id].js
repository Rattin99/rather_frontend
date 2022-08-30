import Container from '../../components/Container'
import Game from '../../components/Game';
import { useState,useEffect } from 'react';
import { useRouter  } from 'next/router';
import RankedList from '../../components/RankedList';




const Compare = () => {
    const [imgArray,setArray] = useState();
    const [showlist,setShowlist] = useState(false);
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
            {imgArray && !showlist && (<Game imageArray = {imgArray} setShowlist = {setShowlist} postId = {id} />)}
            {showlist && <RankedList postId = {id} />}
        </Container>
     );
}
 
export default Compare;