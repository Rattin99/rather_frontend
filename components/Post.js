import { Box,Text,useColorMode, color } from "@chakra-ui/react";

const Post = ({title,post_text}) => {

    const { colorMode } = useColorMode();

    const color = {
        light: 'black',
        dark: 'white'
    }

    return ( 
        <Box   margin='20px auto' borderWidth='1px'  borderRadius='5px' borderColor={color[colorMode]} padding='10px' >
           
           <Text textAlign='center' color={color[colorMode]}>
              {title}
           </Text>
        </Box>
     );
}
 
export default Post;