import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
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
    <div className="app">
      {localStorage.getItem("token") ? <Profile /> : null}

      <Register />
      <Login setUser={setUser}/>

      {posts.data ? <Posts posts={posts} username={user}/> : null}
    <PostForm />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
