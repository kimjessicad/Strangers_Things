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

  const handleClickResetSearch = (event) => {
    event.preventDefault();
    setActiveSearch(false)
  }

  return (
    <div>
      {!activeSearch ?
        posts.posts.length ?
          posts.posts.map((e) => (
            <div key={e._id} className="post">
              <div className="postLeftSide">
                <p className="postTitle">
                {e.title ? e.title : "untitled post"}
              </p>
              <h3 className="postPrice">{e.price}</h3>
                <p classname="postSeller">{`Seller: ${e.author.username}`}</p>
                </div>
             <div className="postRightSide">
              <span className="postDescription">{e.description}</span>
              <span className="postRightLocationDeliver">
              <p className="postLocation">{e.location}</p>
              {e.willDeliver ? <p className="willDeliver"> ✅ Will deliver </p> : null}
              </span>
              
              {
                e.isAuthor ?
                  <button id={`${e._id}`} onClick={handleDelete}>Delete</button>
                  : isLoggedIn ? <MessageForm postId={e._id} /> : null
              }
            </div>
            </div>

          )
          ) : null
        :
        <>
          <div className="searchButtonContainer">
            <button id="clearSearchButton" onClick={handleClickResetSearch}>Clear Search</button>
          </div>
          {searchMatches.map((e) => (
            <div key={e._id} className="post">
              <div className="postLeftSide">
                <p className="postTitle">
                {e.title ? e.title : "untitled post"}
              </p>
              <h3 className="postPrice">{e.price}</h3>
                <p classname="postSeller">{`Seller: ${e.author.username}`}</p>
                </div>
             <div className="postRightSide">
              <p className="postDescription">{e.description}</p>
              <span className="postRightLocationDeliver">
              <p className="postLocation">{e.location}</p>
              {e.willDeliver ? <p className="willDeliver"> ✅ Will deliver </p> : null}
              </span>
              
              {
                e.isAuthor ?
                  <button id={`${e._id}`} onClick={handleDelete}>Delete</button>
                  : isLoggedIn ? <MessageForm postId={e._id} /> : null
              }
            </div>
            </div>
          ))}
        </>
      }
    </div>
  );
};

export default Posts;
