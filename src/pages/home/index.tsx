import React from "react";
import "./home.css";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import useApiResource from "../../utils/useApiResource";
import {
  fetchPostsFailure,
  fetchPostsStart,
  fetchPostsSuccess,
  selectPostByTitle,
} from "../../features/postsSlice";
import { fetchPosts } from "../../utils/api/fetchData";
import Button from "../../components/button";
import comp from "../../assets/homescreenimage.png";
import PostCard from "../../components/post-card";
import Divider from "../../assets/decoration.svg";

const HomeScreen: React.FC = () => {
  const { posts, status, error } = useSelector(
    (state: RootState) => state.posts
  );

  useApiResource(
    fetchPosts,
    fetchPostsStart,
    fetchPostsSuccess,
    fetchPostsFailure
  );

  const selectedPost = useSelector((state: RootState) => selectPostByTitle(state, 'magnam facilis'))


  console.log(selectedPost)

  if (status === "loading") {
    return <div>Loading posts...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }


//   console.log(selectedPost)
  return (
    <div className="home">
      <div className="home-welcome__div">
        <div className="home-welcome__innerdiv">
          <div className="home-welcome__innerdiv_text">
            <p className="home-welcome__largetext">
              Sed Imperdiet Enim li Vitae <span>Welcome User</span>
            </p>
            <p className="home-welome__desc">
              Nam sollicitud nunc, cursus eros vulputate sed. Vestibulum sit
              amet tortor sit amet libero lobortis.
            </p>
            <div className="home-welcome__buttondiv">
              <Button>Do something</Button>
            </div>
          </div>
          <div className="home-welcome__innerdiv__img">
            <img src={comp} alt="computer monitor" />
          </div>
          <div className="home-divider">
            <img src={Divider} alt="divider" />
          </div>
        </div>
      </div>
      <div className="home-blog">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
