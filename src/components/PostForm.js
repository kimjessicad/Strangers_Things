import React, { useRef } from "react";
import { createNewPost } from "../api";



const PostForm = () => {
    // const [title,setTitle]=useState('');
    // const [price,setPrice]=useState('');
    // const [description,setDescription]=useState('');
    // const [location,setLocation]=useState('');
    // const [willDeliver,setWillDeliver]=useState('no');
    const titleInput = React.useRef();
    const priceInput = React.useRef();
    const descriptionInput = React.useRef();
    const locationInput = React.useRef();
    const willDeliverInput = React.useRef();

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
        clearInput()
        const backFromAPI = createNewPost(formObj,localStorage.getItem("token"));
    }
    const clearInput =() =>{
        titleInput.current.value = "";
        priceInput.current.value = "";
        descriptionInput.current.value ="";
        locationInput.current.value ="";
        willDeliverInput.current.value ="no";

    }
  return (
      <form onSubmit = {handleSubmit}>
          <label>Title</label>
          <input ref={titleInput} id='title' type='text' placeholder='Post title' />
          <label>Price</label>
          <input ref={priceInput}id='price' type='text' placeholder='Item price' />
          <label>Description</label>
          <input ref={descriptionInput}id='description' type='text' placeholder='Item description' />
          <label>Location</label>
          <input ref={locationInput}id='location' type = 'text' placeholder='Item location' />
          
          
          <label htmlFor="willDeliver"> 
                <input ref={willDeliverInput} type="checkbox" id="willDeliver" name="willDeliver" value="yes" />Will Deliver?</label>
          <button type ="submit">Create Post</button>
      </form>
  )
}

export default PostForm;
