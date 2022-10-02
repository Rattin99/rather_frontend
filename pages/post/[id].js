import Container from '../../components/Container'
import Game from '../../components/Game';
import { useState,useEffect, useContext } from 'react';
import { useRouter  } from 'next/router';
import RankedList from '../../components/RankedList';
import { UserContext } from '../../utils/UserContext';



const Compare = () => {
  const {user} = useContext(UserContext)
  const router = useRouter();
  const id = router.query.id;
    
  const [showlist,setShowlist] = useState(false);


 useEffect(() => {
  if(!user) router.push('/')
 })
      
  return( 
        <Container> 
            {!showlist && (<Game setShowlist = {setShowlist} postId = {id} />)}
            {showlist && <RankedList postId = {id} />}
        </Container>
     );
}
 
export default Compare;