import React from "react";
import "./postcard.css";
import { Link } from "react-router-dom";
import { PostType } from "../../types";

interface PostCardProps {
  post: PostType
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className="postcard">
      <div className="postcard-image">
        <img src="https://placehold.co/600x400" alt="" />
      </div>
      <div className="postcard-texts">
        <p className="postcard-text__title">{post.title}</p>
        <p className="postcard-text__desc">
          {post.body}
        </p>
        <Link to={`posts/:${post.id}`} className="postcard-text__links">Read More</Link>
      </div>
    </div>
  );
};

export default PostCard;
