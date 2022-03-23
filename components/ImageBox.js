import { Box,Image } from '@chakra-ui/react'

const ImageBox = ({src,index,handleselect}) => {
    return ( 
        <Box  maxH={{base:'30vh',lg:'70vh'}} overflow='hidden' cursor='pointer' margin={{base:'10px 0px',lg:'20px'}}>
         <Image onClick={handleselect} src={src} index ={index} boxSize={{base:'30vh 100vw',lg:'800px'}}  objectFit = {{base:'scale-down',lg:'contain'}}  />
       </Box>
     );
}
 
export default ImageBox;