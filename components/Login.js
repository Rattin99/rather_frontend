import { Box, Button, Input, Text } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { UserContext } from "../utils/UserContext";
import { serverUrl } from "../utils/url";
import { useColorMode } from "@chakra-ui/react";


const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('')
    const [status, setStatus] = useState('')
    const {user,setUser} = useContext(UserContext)

    const { colorMode } = useColorMode()

    const color = {
        light: 'black',
        dark: 'white'
    }

    const loginHandler = async (e) =>{
       try{
        const response = await fetch(`${serverUrl}/login`,{
            method: 'POST',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({email,password})
        })

        const {user_id,error} = await response.json()

        setStatus(error)
        setUser(user_id)

        console.log(error)
       }catch(err) {
        setStatus("please wait for servers to start")
       }
        
    }

    return ( 
        <Box width="100%" height="45%" display="flex" flexDir="column" alignItems="center" justifyContent="center" >
            <Input color={color[colorMode]} onChange={e => setEmail(e.target.value)} width="50%" margin="10px"  placeholder="email" type='email' /> 
            <Input color={color[colorMode]} onChange={e => setPassword(e.target.value)} width="50%" margin="10px"  placeholder="password" type="password" />
            <Text color={color[colorMode]}>{status}</Text>
            <Box  display="flex" alignItems="center" justifyContent="center">
                <Button onClick={loginHandler} colorScheme="cyan" variant="outline" >login</Button>
            </Box>
        </Box>
     );
}
 
export default Login;