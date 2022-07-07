import React from "react";
import { createNewPost } from "../api";

function handleSubmit(event) {
    event.preventDefault();
    console.log(event);
    const formObj = {
        "title": event.target[0].value,
        "price": event.target[1].value,
        "description": event.target[2].value,
        "location" : event.target[3].value,
        "willDeliver" : event.target[4].value
    }

    const backFromAPI = createNewPost(formObj,localStorage.getItem("token"));
}

const PostForm = () => {
  return (
      <form onSubmit = {handleSubmit}>
          <label>Title</label>
          <input id='title' type='text' placeholder='Post title' />
          <label>Price</label>
          <input id='price' type='text' placeholder='Item price' />
          <label>Description</label>
          <input id='description' type='text' placeholder='Item description' />
          <label>Location</label>
          <input id='location' type = 'text' placeholder='Item location' />
          
          
          <label for="willDeliver">
                <input type="checkbox" id="willDeliver" name="willDeliver" value="yes" />Will Deliver?</label>
          <button type ="submit">Create Post</button>
      </form>
  )
}

export default PostForm;
