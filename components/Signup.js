import { Box,Input,Button,Text } from "@chakra-ui/react";
import { useState } from "react";
import { serverUrl } from "../utils/url";



const Signup = () => {

    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [invite,setInvite] = useState();
    const [status,setStatus] = useState();

    const signUpHandler = async () =>{

        
        const response = await fetch(`${serverUrl}/signup`,{
            method: 'POST',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({email,password,invite})
        })

        const res = await response.json();

        
        res.error ? setStatus(res.error) : setStatus(res.result)
        
        
        
    }


    return ( 
        <Box width="100%" height="45%" display="flex" flexDir="column" alignItems="center" justifyContent="center" >
            <Input onChange={(e) => setEmail(e.target.value)} width="50%" margin="10px"  placeholder="email" type='email' /> 
            <Input onChange={e => setPassword(e.target.value)} width="50%" margin="10px"  placeholder="password" type="password" />
            <Input onChange={e => setInvite(e.target.value)} width="50%" margin="10px"  placeholder="invite referral" type="password" />
            {  status ? (<Text>{status}</Text>) : null }
            <Box  display="flex" alignItems="center" justifyContent="center">
                <Button onClick={signUpHandler} colorScheme="cyan" variant="outline" >signup</Button>
            </Box>
        </Box>
     );
}
 
export default Signup;