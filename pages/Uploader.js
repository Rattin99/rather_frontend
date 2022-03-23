import { Box } from "@chakra-ui/react";
import UploaderPage from "../components/UploaderPage";
import Container from "../components/Container";

const Uploader = () => {
    return ( 
        <Container>
            <Box w='100vw' h='30vh' display='flex' alignItems='center'justifyContent='center' >
                 <UploaderPage />
            </Box>
        </Container>
     );
}
 
export default Uploader;