import { Box,Input,Button,Text } from "@chakra-ui/react";
import { useState } from "react";
import { serverUrl } from "../utils/url";
import { useColorMode } from "@chakra-ui/react";



const Signup = () => {

    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [invite,setInvite] = useState();
    const [status,setStatus] = useState();

    const { colorMode } = useColorMode()

    const color = {
        light: 'black',
        dark: 'white'
    }

    const signUpHandler = async () =>{

        console.log('sign up handler called')
        const response = await fetch(`${serverUrl}/signup`,{
            method: 'POST',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({email,password,invite})
        })

        const res = await response.json();
        
        res.error ? setStatus(res.error) : setStatus(res.result); 
    }


    return ( 
        <Box width="100%" height="45%" display="flex" flexDir="column" alignItems="center" justifyContent="center" >
            <Input color={color[colorMode]} onChange={(e) => setEmail(e.target.value)} width="50%" margin="10px"  placeholder="email" type='email' /> 
            <Input color={color[colorMode]} onChange={e => setPassword(e.target.value)} width="50%" margin="10px"  placeholder="password" type="password" />
            <Input color={color[colorMode]} onChange={e => setInvite(e.target.value)} width="50%" margin="10px"  placeholder="invite referral" type="password" />
            {  status ? (<Text color={color[colorMode]}>{status}</Text>) : null }
            <Box  display="flex" alignItems="center" justifyContent="center">
                <Button onClick={signUpHandler} colorScheme="cyan" variant="outline" >signup</Button>
            </Box>
        </Box>
     );
}
 
export default Signup;