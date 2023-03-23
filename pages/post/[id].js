import Container from '../../components/Container'
import Game from '../../components/Game';
import { useState,useEffect, useContext } from 'react';
import { useRouter  } from 'next/router';
import RankedList from '../../components/RankedList';
import { UserContext } from '../../utils/UserContext';
import { Spinner } from '@chakra-ui/react';
import { serverUrl } from '../../utils/url';



const Compare = () => {
  const {user} = useContext(UserContext)
  const router = useRouter();
  const id = router.query.id;
    
  const [showlist,setShowlist] = useState(false);
  const [spin,setSpin] = useState(true)

  const check = async (signal) => {
    const response = await fetch(`${serverUrl}/check/${user}/${id}`,{signal})
    const data = await response.json();

   if(data.length > 0){
      	if(data[0].if_checked == 1) setShowlist(true)
   }

   setSpin(false)
  }


 useEffect(() => {
  if(!user) router.push('/')
 })

 useEffect(() =>{
  const controller = new AbortController()
  const signal = controller.signal
  check(signal)

  return () => controller.abort();
 },[])

 
 if(spin) return (
  <Container>
    <Spinner/>
  </Container>
 )
 if(showlist && !spin) return(
  <Container>
    <RankedList postId={id} />
  </Container>
 )

 if(!showlist && !spin) return(
  <Container>
    <Game setShowlist={setShowlist} postId = {id} />
  </Container>
 )

}
 
export default Compare;