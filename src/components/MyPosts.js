import React, { useState, useRef, useEffect } from "react";
import { updatePost } from "../api";
import { useNavigate } from "react-router";

const MyPosts = ({ myPosts, setNewPostCreated }) => {
  const [showInactive, setShowInactive] = useState(false);
  const showInactiveCheckbox = useRef();
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [userIsEditing, setUserIsEditing] = useState(false);
  const titleInput = useRef();
  const priceInput = useRef();
  const descriptionInput = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    myPosts;
  }, [userIsEditing, selectedPostId]);

  function handleDetailButton(event) {
    setSelectedPostId(event.target.value);
  }
  function handleShowInactive(event) {
    setShowInactive(showInactive ? false : true);
    event.target.checked = !showInactive;
  }

  function handleEditButton(event) {
    setUserIsEditing(true);
  }

  function handleCloseDetailsButton(event) {
    setSelectedPostId("");
    setUserIsEditing(false);
  }

  function handleSubmitChangesButton(event) {
    const newTitle = titleInput.current.value;
    const newPrice = priceInput.current.value;
    const newDescription = descriptionInput.current.value;
    const postObj = {
      title: newTitle,
      price: newPrice,
      description: newDescription,
    };
    console.log(postObj);
    console.log(event);

    const result = updatePost(event.target.value, postObj);
    if (result) setNewPostCreated(true);
    setUserIsEditing(false);
    navigate("/");
    setTimeout(() => navigate("/profile"), 1); //this is a pretty weak solution to get the post to re-render.
  }

  function handleInput(event) {
    console.log(event);
  }

  return (
    <div className="profilePosts">
      <h3 className="profileSectionTitle">My posts</h3>

      <input
        ref={showInactiveCheckbox}
        type="checkbox"
        onClick={handleShowInactive}
      />
      <label>Show Inactive Posts</label>
      {myPosts.length ? (
        myPosts.map((post) => {
          return showInactive || post.active ? (
            <>
              <div
                key={`myPost${post._id}`}
                className={post._id === selectedPostId ? "hidden" : "myPost"}
              >
                <h2>{post.title}</h2>
                <h4>{post.messages.length} Messages</h4>
                <button value={post._id} onClick={handleDetailButton}>
                  More Info
                </button>
              </div>
              <div
                key={`myPostDetail${post._id}`}
                className={post._id === selectedPostId ? "post" : "hidden"}
              >
                {" "}
                {userIsEditing ? (
                  <div className="postForm">
                    <div className="postFormLeft">
                      <>
                        <label>Title</label>
                        <input
                          ref={titleInput}
                          defaultValue={post.title}
                          className="editFormTitleInput"
                          onChange={handleInput}
                        ></input>
                      </>
                      <label>Price</label>
                      <input
                        ref={priceInput}
                        defaultValue={post.price}
                        className="editFormPriceInput"
                      ></input>
                    </div>
                    <div className="postFormRight">
                      <label>Description</label>
                      <input
                        ref={descriptionInput}
                        defaultValue={post.description}
                        className="editFormDescriptionInput"
                      ></input>
                      <button
                        value={post._id}
                        onClick={handleSubmitChangesButton}
                        id="submitButton"
                        className="editButton"
                      >
                        Submit
                      </button>
                      <button
                        id="closeDetailsButton"
                        className="editButton"
                        onClick={handleCloseDetailsButton}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="post">
                    <div className="postLeftSide">
                      <h2 className="postTitle">
                        {post.title ? post.title : "untitled post"}
                      </h2>
                      <h3 className="postPrice">{post.price}</h3>
                    </div>
                    <div className="postRightSide">
                      <p className="postDescription">{post.description}</p>
                      <p className="postLocation">{post.location}</p>
                      {post.willDeliver ? <p> ✅ Will deliver </p> : null}
                    </div>
                    <button onClick={handleEditButton}>Edit</button>
                  </div>
                )}
              </div>
              
              {(post.messages.length && post._id === selectedPostId) 
                ? post.messages.map((message) => {
                    return (
                      <div className="message">
                        <h4>From: {message.fromUser.username}</h4>
                        <p>Message: {message.content}</p>
                      </div>
                    );
                  })
                : null}
            </>
          ) : null;
        })
      ) : (
        <p>No posts to display</p>
      )}
    </div>
  );
};

export default MyPosts;
