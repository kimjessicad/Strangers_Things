import React, { useState, useEffect, Fragment } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { fetchAllPosts } from "./api";
import { Posts, Login, Register, Profile, PostForm, NavBar } from "./components";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isNewUser, setIsNewUser] = useState(false);


  const handleLogoutButton = (event)=>{
    event.preventDefault();
    setIsLoggedIn(false);
    localStorage.removeItem("token");
  }
  const fetchPosts = async () => {
    try {
      const result = await fetchAllPosts(isLoggedIn);
      console.log(result, "inside fetchPosts");
      setPosts(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setIsLoggedIn(!!localStorage.token);
    setPosts(fetchPosts());
    console.log("useEffect ran and isLoggedIn was",isLoggedIn)
  }, [isLoggedIn]);

  posts.data ? console.log(posts.data.posts) : null;

  return (
      <BrowserRouter>
        <div id ="container">
          <div id ="navbar">
          </div>
          <div id = 'main-section'>
            <Routes>
            <Route path ="/profile" element={<Fragment>< NavBar/>{localStorage.getItem("token") ? <Profile /> : null}</Fragment>}>
            </Route>
            <Route path ="/login" element = {<Fragment>< NavBar/><Login setIsLoggedIn={setIsLoggedIn} setUser={setUser}/></Fragment>}>
            {/*put Register in Login*/}
            </Route>
            <Route exact path="/" element= {<Fragment><NavBar/><PostForm/>{posts.data ? <Posts posts={posts} username={user} isLoggedIn={isLoggedIn}/> : null}</Fragment>}>
            </Route>
            <Route path ="/register" element ={<Fragment>< NavBar/><Register/></Fragment>}></Route>
            </Routes>
          </div>
        </div>


      </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
