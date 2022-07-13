import React, { useState } from "react";
import { createNewPost } from "../api";

const PostForm = ({ setNewPostCreated }) => {
  const [checked, setChecked] = useState("unchecked");
  const titleInput = React.useRef();
  const priceInput = React.useRef();
  const descriptionInput = React.useRef();
  const locationInput = React.useRef();
  const willDeliverInput = React.useRef();

  function handleCheckbox() {
    setChecked(checked === "checked" ? "unchecked" : "checked");
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event);
    const formObj = {
      title: event.target[0].value,
      price: event.target[1].value,
      description: event.target[2].value,
      location: event.target[3].value,
      willDeliver: checked === "checked",
    };
    clearInput();
    const backFromAPI = createNewPost(formObj, localStorage.getItem("token"));
    setNewPostCreated(true);
  }
  const clearInput = () => {
    titleInput.current.value = "";
    priceInput.current.value = "";
    descriptionInput.current.value = "";
    locationInput.current.value = "";
    willDeliverInput.current.value = "no";
  };
  return (
    <form className="postFormContainer" onSubmit={handleSubmit}>
      <div className="postForm">
        <div className="postFormLeft">
          <label>Title</label>
          <input
            ref={titleInput}
            id="title"
            type="text"
            placeholder="Post title"
          />
          <label>Price</label>
          <input
            ref={priceInput}
            id="price"
            type="text"
            placeholder="Item price"
          />
        </div>
        <div className="postFormRight">
          <label>Description</label>
          <input
            ref={descriptionInput}
            id="description"
            type="text"
            placeholder="Item description"
          />
          <label>Location</label>
          <input
            ref={locationInput}
            id="location"
            type="text"
            placeholder="Item location"
          />
          <div className="deliverSpan">
            <label htmlFor="willDeliver">Will Deliver?</label>
            <input
              ref={willDeliverInput}
              type="checkbox"
              id="willDeliver"
              onChange={handleCheckbox}
            />
          </div>
        </div>
      </div>
      <div className="postFormSubmit">
        <button type="submit">Create Post</button>
      </div>
    </form>
  );
};

export default PostForm;
