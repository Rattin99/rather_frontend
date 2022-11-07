import Container from "../components/Container";
import SearchBar from "../components/SearchBar";
import Link from "next/link";
import Post from "../components/Post";
import { useState } from "react";
import { Box } from "@chakra-ui/react";
import { useContext } from "react";
import { UserContext } from "../utils/UserContext";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { serverUrl } from "../utils/url";


const SearchPage = () => {

    const [data,setData] = useState([]);
    const {user} = useContext(UserContext)
    
    const router = useRouter()


    useEffect(() => {
        if(!user) router.push('/')
    })  


    const SearchInputChangeHandler = async (e) => {
       const value = e.target.value;

       if(value.length == 0) return;

       const response = await fetch(`${serverUrl}/search`,{
        method: 'POST',
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({value})
       });
       const result = await response.json();

       setData(result)

       console.log(result);
    }


    const renderPosts = (posts) => {

        return <Box width="40%">
             {posts.map((data,index) => (
            <Link href={'/post/'+ data.post_id} key= {data.post_id}>
              <a>
                <Post title = {posts[index].title} post_text = {posts[index].post_text} />
              </a>
            </Link>
          ))
    }
        </Box>
    }

    return ( 
        <Container>
            <SearchBar SearchInputChangeHandler ={SearchInputChangeHandler} />
           <Box display='flex' alignItems="center" justifyContent="center"  >
            {
                data.length != 0 && renderPosts(data)
            }
           </Box>
        </Container>
     );
}



 
export default SearchPage;