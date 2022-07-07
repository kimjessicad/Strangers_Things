import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { fetchAllPosts } from "./api";
import { Posts, Login, Register } from "./components";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null);

  const fetchPosts = async () => {
    try {
      const result = await fetchAllPosts();
      console.log(result,"inside fetchPosts")
      setPosts(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  posts.data ? console.log(posts.data.posts) : null

  return (
    <div className="app">
        <Register/>
        <Login/>

      { posts.data ?
      <Posts posts={posts} />
      :null}


      </div>
  
  );
};

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
