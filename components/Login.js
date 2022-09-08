import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";



const Login = () => {
    return ( 
        <Box width="100%" height="45%" display="flex" flexDir="column" alignItems="center" justifyContent="center" >
            <Input width="50%" margin="10px"  placeholder="email" type='email' /> 
            <Input width="50%" margin="10px"  placeholder="password" type="password" />
            <Box  display="flex" alignItems="center" justifyContent="center">
                <Button colorScheme="cyan" variant="outline" >login</Button>
            </Box>
        </Box>
     );
}
 
export default Login;