import { Box, Divider } from "@chakra-ui/react"
import Container from "../components/Container"
import Content from "../components/Content"
import LandingPage from "../components/LandingPage";


export const getStaticProps = async () => {

  const data = await fetch("http://localhost:5000/posts").then((respond) => respond.json())
  return {
    props: { data }
  };
};



export default function Home(props) {
  

  return (
      // <Container>
      //   <Box display='flex' alignItems='center' justifyContent='center' >
      //       <Content data={props.data}/>
      //   </Box>
        
      // </Container>
      <LandingPage />
  )
}

