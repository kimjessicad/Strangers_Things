import React, { useState, useEffect } from "react";
import { updatePost } from "../api";
import { useNavigate } from "react-router";

const MyPosts = ({ myPosts, setNewPostCreated, newPostCreated }) => {
  const [showInactive, setShowInactive] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [userIsEditing, setUserIsEditing] = useState(false);
  const [editFields, setEditFields] = useState({})
  const [editedAPost, setEditedAPost] = useState(false)

  useEffect(() => {
    setEditedAPost(false)
  }, [userIsEditing, selectedPostId, editedAPost]);

  function handleDetailButton(event) {
    setSelectedPostId(event.target.value);
  }
  function handleShowInactive() {
    setShowInactive(!showInactive);
    
  }

  function handleEditButton(event, post) {
    if(!userIsEditing) { 
      setEditFields({
        title : post.title, 
        price : post.price,
        description : post.description
      })

    }
    setUserIsEditing(true);

  }
  function handleTitleInput(event){
    setEditFields({
      ...editFields,
      title: event.target.value
    })
  }
  function handlePriceInput(event){
    setEditFields({
      ...editFields,
      price: event.target.value
    })
  }
  function handleDescriptionInput(event){
    setEditFields({
      ...editFields,
      description: event.target.value
    })
  }

  function handleCloseDetailsButton() {
    setSelectedPostId("");
    setUserIsEditing(false);
  }

  function handleSubmitChangesButton(event){
    //button has an assigned value equal to post.id
    const result = updatePost(event.target.value, editFields);
    if (result) {
      setNewPostCreated(true);
      setUserIsEditing(false);
      setEditedAPost(true);
    }
  }
 

  return (
    <div className="profilePosts">
      <h3 className="profileSectionTitle">My posts</h3>

      <input
        type="checkbox"
        onChange={handleShowInactive}
        checked={showInactive}
        
      />
      <label>Show Inactive Posts</label>
      {myPosts.length ? (
        myPosts.map((post) => {
          return showInactive || post.active ? (
            <div key={`myPost${post._id}`}>
              <div className={post._id === selectedPostId ? "hidden" : "myPost"}
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
                          defaultValue = {post.value}
                          value = {editFields.title}
                          className="editFormTitleInput"
                          onChange={handleTitleInput}
                        ></input>
                      </>
                      <label>Price</label>
                      <input
                        value = {editFields.price}
                        className="editFormPriceInput"
                        onChange={handlePriceInput}
                      ></input>
                    </div>
                    <div className="postFormRight">
                      <label>Description</label>
                      <input
                        value={editFields.description}
                        className="editFormDescriptionInput"
                        onChange={handleDescriptionInput}
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
                    <button 
                        onClick={event => handleEditButton(event,post)}
                        value = {post}>Edit</button>
                  </div>
                )}
              </div>
              
              {(post.messages.length && post._id === selectedPostId) 
                ? post.messages.map((message) => {
                    return (
                      <div className="message" key ={message._id}>
                        <h4>From: {message.fromUser.username}</h4>
                        <p>Message: {message.content}</p>
                      </div>
                    );
                  })
                : null}
            </div>
          ) : null;
        })
      ) : (
        <p>No posts to display</p>
      )}
    </div>
  );
};

export default MyPosts;
