//this component renders a view of posts to unauthenticated users, following step 1 of the development path in the workshop

import React from "react";
import { deletePost } from "../api";
import { MessageForm } from "./MessageForm"

const Posts = (props) => {
  const posts = props.posts.data;
  const username = props.username;

const handleDelete = async (event) => {
  event.preventDefault()
  const token = localStorage.token
  const postId = event.target.id
  deletePost(token, postId)
}


  console.log(posts)
  return (
    <div>
      { posts.posts.length ?
      posts.posts.map((e)=>(
          <div key={ e.id } className="post">
             <h2 className="postTitle">
                 { e.title }
             </h2>
             <h3>{e.price}</h3>
             <h4>{`Seller: ${e.author.username}`}</h4>
             <p>{e.description}</p>
             <p>{e.location}</p>
             {e.willDeliver ? <p> Will deliver </p> : null}
             {
             (e.author.username === username)?
             //this is where we do the stuff for our own posts
             <p>Look! This post is mine!</p>
             :null
            }

            <button id={`${e._id}`} onClick= {handleDelete}>Delete</button>



          </div>
      )
      ):null }
    </div>
  );
};

export default Posts;
