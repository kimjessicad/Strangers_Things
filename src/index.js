import React, { useState, useEffect, Fragment } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { fetchAllPosts } from "./api";
import { Posts, Login, Register, Profile, PostForm } from "./components";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null);


  const fetchPosts = async () => {
    try {
      const result = await fetchAllPosts();
      console.log(result, "inside fetchPosts");
      setPosts(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  posts.data ? console.log(posts.data.posts) : null;

  return (
      <BrowserRouter>
        <div id ="container">
          <div id ="navbar">
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/login">Login</Link>
          </div>
          <div id = 'main-section'>
            <Routes>
            <Route path ="/profile" element={localStorage.getItem("token") ? <Profile /> : null}>
            </Route>
            <Route path ="/login" element = {<Login setUser={setUser}/>}>
            {/*put Register in Login*/}
            </Route>
            <Route exact path="/" element= {<Fragment><PostForm/>{posts.data ? <Posts posts={posts} username={user}/> : null}</Fragment>}>
            </Route>
            </Routes>
          </div>
        </div>


      </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
