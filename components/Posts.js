import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Post from "./Post";
import Link from "next/link";

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
        loader={<h3> Loading...</h3>}
        endMessage={<h4>Nothing more to show</h4>}
      >
        {posts.map((data) => (
          <Link href={'/post/'+ data.id} key= {data.id}>
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