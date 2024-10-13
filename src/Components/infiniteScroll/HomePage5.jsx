import React, { useEffect, useState } from "react";
import SinglePost from "./SinglePost";

const HomePage5 = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);

  const getData = async () => {
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=9&_page=${page}`)
      .then((res) => res.json())
      .then((data) => setPosts((prev) => [...prev, ...data]));
  };

  const handleInfiniteScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    getData();
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, []);

  return (
    <div>
      {posts.map((post, i) => (
        <SinglePost key={i} post={post} />
      ))}
    </div>
  );
};

export default HomePage5;
