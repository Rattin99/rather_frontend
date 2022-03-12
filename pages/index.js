import { Box } from "@chakra-ui/react"
import Container from "../components/Container"
import Content from "../components/Content"

export const getStaticProps = async () => {
  const data = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=30"
  ).then((response) => response.json());
  console.log(data)
  return {
    props: { data }
  };
};

export default function Home(props) {
  return (
    <div>
      <Container>
        <Box display='flex' alignItems='center' justifyContent='center' >
          <Content data={props.data} />
        </Box>
      </Container>
    </div>
  )
}
