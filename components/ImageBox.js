import { Box,Image } from '@chakra-ui/react'

const ImageBox = ({src,index}) => {
    return ( 
        <Box  maxH={{base:'30vh',lg:'70vh'}} overflow='hidden' cursor='pointer' margin={{base:'10px 0px',lg:'20px'}}>
         <Image src={src} index ={index} boxSize={{base:'100vw',lg:'600px'}} htmlHeight='40vh' />
       </Box>
     );
}
 
export default ImageBox;