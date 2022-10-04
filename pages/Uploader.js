import UploaderPage from "../components/UploaderPage";
import Container from "../components/Container";
import { useContext, useEffect } from "react";
import { UserContext } from "../utils/UserContext";
import { useRouter } from "next/router";

const Uploader = () => {

      const {user} = useContext(UserContext);
      const router = useRouter()

    useEffect(() => {
      if(!user) router.push('/')
    })  

    return (     
        <Container>
              <UploaderPage />
        </Container>
      );
}
 
export default Uploader;