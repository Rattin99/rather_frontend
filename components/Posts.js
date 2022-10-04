import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Post from "./Post";
import Link from "next/link";
import { Spinner,Box } from '@chakra-ui/react'

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async (signal) => {
    const response = await fetch(`http://localhost:5000/posts`,{signal});
    const data = await response.json()
    setPosts(data)
  }


  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    getPosts(signal)

    return () => controller.abort();
  },[])

  return (
    <>
    {posts.map((data,index) => (
            <Link href={'/post/'+ data.post_id} key= {data.post_id}>
              <a>
                <Post title = {posts[index].title} post_text = {posts[index].post_text} />
              </a>
            </Link>
          ))
    }
    </>
  );
};

export default Posts;