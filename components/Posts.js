import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Post from "./Post";
import Link from "next/link";
import { Spinner,Box } from '@chakra-ui/react'

const Posts = ({ data }) => {
  const [posts, setPosts] = useState(data);
  const [hasMore, setHasMore] = useState(true);



  
  const getMorePost = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/todos?_start=${posts.length}&_limit=10`
    );
    const newPosts = await res.json();
    setPosts((post) => [...post, ...newPosts]);
  };

  return (
    <>
      <InfiniteScroll
        dataLength={posts.length}
        next={getMorePost}
        hasMore={hasMore}
        loader={<Box height='80' display='flex' flexDirection='row' alignItems='center' justifyContent='center'><Spinner /></Box>}
        endMessage={<h4>Nothing more to show</h4>}
      >
        {posts.map((data) => (
          <Link href={'/post/'+ data.post_id} key= {data.post_id}>
            <a>
              <Post/>
            </a>
          </Link>
        ))}
        
      </InfiniteScroll>

      
     
    </>
  );
};

export default Posts;