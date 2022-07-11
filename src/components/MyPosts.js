import React, { useState, useRef } from "react";
import SinglePost from "./SinglePost";

const MyPosts = ({ myPosts }) => {
  const [showInactive, setShowInactive] = useState(false);
  const showInactiveCheckbox = useRef();
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [userIsEditing, setUserIsEditing] = useState(false);

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
    setSelectedPostId('')
    setUserIsEditing(false)
  }

function handleSubmitChangesButton(event) {

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
                className={post._id === selectedPostId ? "hidden" : "post"}
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
              > {
                userIsEditing ?
                <div className="editPostInputContainer">
                <input defaultValue={post.title} className="editFormTitleInput" onChange={handleInput}></input>
                <input defaultValue={post.price} className="editFormPriceInput"></input>
                <input defaultValue={post.description} className="editFormDescriptionInput"></input>
                </div>
                :
                <>
                <h2 className="postTitle">
                  {post.title ? post.title : "untitled post"}
                </h2>
                <h3>{post.price}</h3>
                <p>{post.description}</p>
                <p>{post.location}</p>
                {post.willDeliver ? <p> ✅ Will deliver </p> : null}
                </>
              }
                <div className="detailPostButtonPanel">
                  {post.active ? <button onClick={handleEditButton}>Edit</button> : null}
                  <button onClick={handleCloseDetailsButton}>Close Details</button>
                  {userIsEditing ? <button onClick={handleSubmitChangesButton}>Submit</button>:null}
                </div>
              </div>
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
