import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { UserContext } from "../utils/UserContext";



const Login = () => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('')
    const {user,setUser} = useContext(UserContext)

    const loginHandler = async (e) =>{
        const response = await fetch(`http://localhost:5000/login`,{
            method: 'POST',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({email,password})
        })

        // response.json().then(e => console.log(e)).catch(e => console.log(e))

        const {user_id} = await response.json()

        setUser(user_id)

    }

    return ( 
        <Box width="100%" height="45%" display="flex" flexDir="column" alignItems="center" justifyContent="center" >
            <Input onChange={e => setEmail(e.target.value)} width="50%" margin="10px"  placeholder="email" type='email' /> 
            <Input onChange={e => setPassword(e.target.value)} width="50%" margin="10px"  placeholder="password" type="password" />
            <Box  display="flex" alignItems="center" justifyContent="center">
                <Button onClick={loginHandler} colorScheme="cyan" variant="outline" >login</Button>
            </Box>
        </Box>
     );
}
 
export default Login;