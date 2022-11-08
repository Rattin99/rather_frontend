import { Box,Hide,Text } from "@chakra-ui/react";
import Login from "./Login";
import Signup from "./Signup";
import { useColorMode } from "@chakra-ui/react";



const LandingPage = () => {
    const { colorMode } = useColorMode()

    const color = {
        light: 'black',
        dark: 'white'
    }

    return ( 
        <Box height="100vh" width="100vw" display="flex">
           
            <Box height="100%"  width={{base:"100%"}} >
                <Login />
                <Text align="center" color={color[colorMode]} display="flex" flexDir="column" alignItems="center" >
                    dont have an account yet? ask your friends for an invite and signup
                </Text>
                <Signup />
            </Box>
        </Box>
     );
}


 
export default LandingPage;