import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Post from "./Post";
import Link from "next/link";
import { Box, Spinner } from '@chakra-ui/react'
import { serverUrl } from "../utils/url";

const Posts = () => {

  const [posts, setPosts] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  const getPosts = async (signal) => {
   try{
    const response = await fetch(`${serverUrl}/posts?start=${posts.length}&limit=15`,{signal});
    const data = await response.json()
    setPosts(data)
   }catch(err){
    console.log(err)
   }
  }

  const getMorePostss = async () => {
    const res = await fetch(
      `${serverUrl}/posts?start=${posts.length}&limit=10`
    );
    const newPosts = await res.json();
    setPosts((post) => [...post,...newPosts])

    console.log("fired")
    
    if(newPosts.length == 0) setHasMore(false)
  }



  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    getPosts(signal)

    return () => controller.abort();
  },[])

  return (
    <>
    <InfiniteScroll
      className="infinite"
      dataLength={posts.length}
      next = {getMorePostss}
      hasMore = {hasMore}
      loader = {<Spinner className="spinner"/>}
      endMessage={
        <p style={{ textAlign: 'center' }}>
          <b>no more posts</b>
        </p>
      }
      
    >
    {posts.map((data,index) => (
            <Box key= {data.post_id} width ={{base:'66%',lg:'40%'}} margin="auto">
                <Link href={'/post/'+ data.post_id} >
                  <a>
                    <Post title = {posts[index].title} post_text = {posts[index].post_text} />
                  </a>
                </Link>
            </Box>
          ))
    }
    </InfiniteScroll>
    </>
  );
};

export default Posts;