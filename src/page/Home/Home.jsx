import { useState } from "react";
import { Comments } from "../../component/comments/Comments";
import { Header } from "../../component/header/Header";
import { Images } from "../../component/ImagesComponent/Images";
import { Posts } from "../../component/posts/Posts";

export function Home() {
  const [page, setPage] = useState("posts");
  return (
    <>
      <Header setPage={setPage} />
      {page === "posts" ? (
        <Posts />
      ) : page === "coments" ? (
        <Comments />
      ) : (
        <Images />
      )}
    </>
  );
}
