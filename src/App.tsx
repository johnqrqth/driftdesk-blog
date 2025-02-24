import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "./pages/home";
import SinglePostScreen from "./pages/blog/post";
import UserIndexScreen from "./pages/user";
import Layout from "./components/layout";
import NotFoundScreen from "./pages/not-found";

function App() {
  return (
    <div className="app container">
      <div className="">
        <Routes>
          <Route path="/" element={<Layout />}>

            <Route index element={<HomeScreen />} />

            {/* <Route path="blog" element={<BlogIndexScreen />} />
            <Route path="blog/:postId" element={<BlogHomeScreen />} /> */}

            {/* <Route path="blog" element={<BlogHomeScreen />} /> */}
            <Route path="posts/:postId" element={<SinglePostScreen />} />

            <Route path="/users" element={<UserIndexScreen />} />

            <Route path="*" element={<NotFoundScreen />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
