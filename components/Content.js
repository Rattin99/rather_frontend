import { Box } from "@chakra-ui/react";
import Posts from "./Posts";
import styled from '@emotion/styled'




const Content = (props) => {

    const StyledBox = styled(Box)`
        overflow-y: scroll;
        overscroll-behavior-y: none;
        `

       
    return ( 
        <StyledBox h='90vh' w="100%"  >
            <Posts/>
        </StyledBox>
     );
}


 
export default Content; 