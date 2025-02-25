import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { selectPostById } from "../../features/postsSlice";
import { useParams } from "react-router-dom";
import './blog.css'

const SinglePostScreen: React.FC = () => {
  let { postId } = useParams();

  console.log("postId", postId);

  const post = useSelector((state: RootState) =>
    selectPostById(state, 42)
  );
  console.log(post)

  return (
    <div className="blog-home">
      <h1 className="blog-h1">{post?.title}</h1>
      <p>{post?.body}</p>
    </div>
  );
};

export default SinglePostScreen;
