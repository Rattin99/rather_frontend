import { Box,Text } from "@chakra-ui/react";
import Login from "./Login";
import Signup from "./Signup";



const LandingPage = () => {
    return ( 
        <Box height="100vh" width="100vw" display="flex">
            <Box bgColor="tomato"  height="100%" width="50%" display="flex" flexDir="column" alignItems="center" justifyContent="center">
                <Text fontSize ="6xl" color="white">.sustmash</Text>
            </Box>
            <Box height="100%" width="50%" >
                <Login />
                <Text color="black" display="flex" flexDir="column" alignItems="center" >
                    dont have an account yet? ask your friends for an invite and signup
                </Text>
                <Signup />
            </Box>
        </Box>
     );
}
 
export default LandingPage;