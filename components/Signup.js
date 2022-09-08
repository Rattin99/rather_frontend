import { Box,Input,Button } from "@chakra-ui/react";
import { useState } from "react";



const Signup = () => {

    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [invite,setInvite] = useState();

    const signUpHandler = async () =>{

        
        const response = await   fetch(`http://localhost:5000/signup`,{
            method: 'POST',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({email,password,invite})
        })

        response.json().then(e => console.log(e)).catch(err => console.log(err))
       
        
    }


    return ( 
        <Box width="100%" height="45%" display="flex" flexDir="column" alignItems="center" justifyContent="center" >
            <Input onChange={(e) => setEmail(e.target.value)} width="50%" margin="10px"  placeholder="email" type='email' /> 
            <Input onChange={e => setPassword(e.target.value)} width="50%" margin="10px"  placeholder="password" type="password" />
            <Input onChange={e => setInvite(e.target.value)} width="50%" margin="10px"  placeholder="invite referral" type="password" />
            <Box  display="flex" alignItems="center" justifyContent="center">
                <Button onClick={signUpHandler} colorScheme="cyan" variant="outline" >signup</Button>
            </Box>
        </Box>
     );
}
 
export default Signup;