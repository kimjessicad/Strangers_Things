import React, { useState, useEffect, Fragment } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { fetchAllPosts } from "./api";
import { Posts, Login, Register, Profile, PostForm } from "./components";

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
            {
            ({isLoggedIn})
            ? <>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            </>

            : <>
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <button onClick={handleLogoutButton}>Logout</button>
            </> }
          </div>
          <div id = 'main-section'>
            <Routes>
            <Route path ="/profile" element={localStorage.getItem("token") ? <Profile /> : null}>
            </Route>
            <Route path ="/login" element = {<Login setIsLoggedIn={setIsLoggedIn} setUser={setUser}/>}>
            {/*put Register in Login*/}
            </Route>
            <Route exact path="/" element= {<Fragment><PostForm/>{posts.data ? <Posts posts={posts} username={user} isLoggedIn={isLoggedIn}/> : null}</Fragment>}>
            </Route>
            </Routes>
          </div>
        </div>


      </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
