//this component renders a view of posts to unauthenticated users, following step 1 of the development path in the workshop

import React from "react";
import { useEffect } from "react";
import { deletePost } from "../api";
import { MessageForm } from "./";

const Posts = (props) => {
  const posts = props.posts.data;
  const { isLoggedIn, activeSearch, setActiveSearch, searchMatches } = props
  useEffect(() => {
    console.log("useEffect ran in Posts");
  }, []);

  const handleDelete = async (event) => {
    event.preventDefault()
    const token = localStorage.token
    const postId = event.target.id
    deletePost(token, postId)
  }

  return (
    <div>
      {!activeSearch ?
        posts.posts.length ?
          posts.posts.map((e) => (
            <div key={e._id} className="post">
              <h2 className="postTitle">
                {e.title ? e.title : "untitled post"}
              </h2>
              <h3>{e.price}</h3>
              <h4>{`Seller: ${e.author.username}`}</h4>
              <p>{e.description}</p>
              <p>{e.location}</p>
              {e.willDeliver ? <p> ✅ Will deliver </p> : null}
              {
                e.isAuthor ?
                  <button id={`${e._id}`} onClick={handleDelete}>Delete</button>
                  : isLoggedIn ? <MessageForm postId={e._id} /> : null
              }

            </div>
          )
          ) : null
        : <div>
            <button onClick="">Clear search</button>
        searchMatches.map((e)=>(
          <div key={e._id} className="post">
            <h2 className="postTitle">
              {e.title ? e.title : "untitled post"}
            </h2>
            <h3>{e.price}</h3>
            <h4>{`Seller: ${e.author.username}`}</h4>
            <p>{e.description}</p>
            <p>{e.location}</p>
            {e.willDeliver ? <p> ✅ Will deliver </p> : null}
            {
              e.isAuthor ?
                <button id={`${e._id}`} onClick={handleDelete}>Delete</button>
                : isLoggedIn ? <MessageForm postId={e._id} /> : null
            }

          </div>
          ))
        </div>
      }
    </div>
  );
};

export default Posts;
