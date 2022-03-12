import { Image,Box,Text,useColorMode, color } from "@chakra-ui/react";

const Post = () => {

    const { colorMode } = useColorMode();

    const color = {
        light: 'black',
        dark: 'white'
    }

    return ( 
        <Box margin='20px 0px' borderWidth='1px' borderRadius='5px' borderColor={color[colorMode]} padding='10px'>
           <Box display='flex' flexDirection='row' alignItems='center' justifyContent='center'>
               <Image
               src="41266904_10155968311683869_8073629473766899712_n.jpg"
               objectFit='cover'
               boxSize='400px'
               padding='10px'
                />
                <Image
                src="Adriana-Chechik_02.jpg"
                objectFit='cover'
                boxSize='400px'
                padding='10px'
                />
           </Box>
           <Text textAlign='center' color={color[colorMode]}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ipsa repudiandae quisquam dolorum laborum in eum iure commodi consequatur reprehenderit alias, nam tempora ipsum corrupti facere. Earum incidunt enim vitae!
           </Text>
        </Box>
     );
}
 
export default Post;