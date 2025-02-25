import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { selectPostById, selectPostByTitle } from "../../features/postsSlice";
import { useParams } from "react-router-dom";
import "./blog.css";

const SinglePostScreen: React.FC = () => {
  let { postId } = useParams();

  const [boldTitle, setBoldTitle] = useState(false)

  console.log("postId", postId);

  const post = useSelector((state: RootState) =>
    selectPostById(state, Number(postId))
  );

  //   const post = useSelector((state: RootState) =>
  //     selectPostByTitle(state, 'magnus')
  //   );

//   let boldTitle = false;

  if (post?.title === "magnam facilis") {
    console.log(post)
    setBoldTitle(true)
  }

  

  return (
    <div className="blog-home">
      <h1 className={boldTitle ? 'blog-h1': 'bold-title'}>{post?.title}</h1>
      <p>{post?.body}</p>
    </div>
  );
};

export default SinglePostScreen;
