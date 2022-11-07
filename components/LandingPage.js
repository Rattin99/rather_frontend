import { Box,Hide,Text } from "@chakra-ui/react";
import Login from "./Login";
import Signup from "./Signup";



const LandingPage = () => {
    return ( 
        <Box height="100vh" width="100vw" display="flex">
           <Hide breakpoint="(max-width:425px)">
                <Box className="loggo" bgColor="#00B5D8"  height="100%" width="50%" display="flex" flexDir="column" alignItems="center" justifyContent="center">
                    <Text fontSize ="6xl" color="white">.sustmash</Text>
                </Box>
           </Hide>
            <Box height="100%" width={{base:"100%",md:"50%"}} >
                <Login />
                <Text align="center" color="black" display="flex" flexDir="column" alignItems="center" >
                    dont have an account yet? ask your friends for an invite and signup
                </Text>
                <Signup />
            </Box>
        </Box>
     );
}

// display="flex" flexDirection="column"  alignItems="center" justifyContent="center"
 
export default LandingPage;