import React, { useState, useEffect, Fragment } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { fetchAllPosts } from "./api";
import {
  Posts,
  Login,
  Register,
  Profile,
  PostForm,
  NavBar,
  SearchBar,
} from "./components";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [newPostCreated, setNewPostCreated] = useState(false);
  const [searchMatches, setSearchMatches] = useState([]);
  const [activeSearch, setActiveSearch] = useState(false);
  const [createPost, setCreatePost] = useState(false);

  const fetchPosts = async () => {
    try {
      const result = await fetchAllPosts(isLoggedIn);
      setPosts(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setIsLoggedIn(!!localStorage.token);
    setNewPostCreated(false);
    setPosts(fetchPosts());
  }, [isLoggedIn, newPostCreated, activeSearch]);
  console.log(searchMatches);

  function handleCreatePostButton(event) {
    setCreatePost(true);
  }

  function handleCancelPostButton(event) {
    setCreatePost(false);
  }

  return (
    <BrowserRouter>
      <div id="container">
        <div id="navbar"></div>
        <div id="main-section">
          <Routes>
            <Route
              path="/profile"
              element={
                <Fragment>
                  <NavBar
                    setIsLoggedIn={setIsLoggedIn}
                    isLoggedIn={isLoggedIn}
                  />
                  {localStorage.getItem("token") ? (
                    <Profile
                      user={user}
                      setNewPostCreated={setNewPostCreated}
                    />
                  ) : null}
                </Fragment>
              }
            ></Route>
            <Route
              path="/login"
              element={
                <Fragment>
                  <NavBar
                    setIsLoggedIn={setIsLoggedIn}
                    isLoggedIn={isLoggedIn}
                  />
                  <Login setIsLoggedIn={setIsLoggedIn} setUser={setUser} />
                </Fragment>
              }
            ></Route>
            <Route
              exact
              path="/"
              element={
                <Fragment>
                  <NavBar
                    posts={posts}
                    setSearchMatches={setSearchMatches}
                    setActiveSearch={setActiveSearch}
                    setIsLoggedIn={setIsLoggedIn}
                    isLoggedIn={isLoggedIn}
                  />
                  <button
                    onClick={handleCreatePostButton}
                    className={createPost ? "hidden" : "createPostButton"}
                  >
                    Create Post
                  </button>
                  <button
                    onClick={handleCancelPostButton}
                    className={!createPost ? "hidden" : "cancelPostButton"}
                  >
                    Cancel Post
                  </button>
                  {!createPost ? null : (
                    <PostForm setNewPostCreated={setNewPostCreated} />
                  )}

                  {posts.data ? (
                    <Posts
                      posts={posts}
                      isLoggedIn={isLoggedIn}
                      activeSearch={activeSearch}
                      setActiveSearch={setActiveSearch}
                      searchMatches={searchMatches}
                    />
                  ) : null}
                </Fragment>
              }
            ></Route>
            <Route
              path="/register"
              element={
                <Fragment>
                  <NavBar
                    setIsLoggedIn={setIsLoggedIn}
                    isLoggedIn={isLoggedIn}
                  />
                  <Register />
                </Fragment>
              }
            ></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
