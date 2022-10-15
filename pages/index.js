import { useContext } from "react";
import LandingPage from "../components/LandingPage";
import { UserContext } from "../utils/UserContext";
import { Box } from "@chakra-ui/react"
import Container from "../components/Container"
import Content from "../components/Content"


export default function Home() {

  const {user,setUser} = useContext(UserContext)

  
  if(user) return (
    <Container>
      <Box display='flex' alignItems='center' justifyContent='center' >
          <Content/>
      </Box>
    </Container>
  )

  if(!user) return (
    <LandingPage />
  )
}

