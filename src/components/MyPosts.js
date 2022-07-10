import React, { useState, useRef } from "react";

const MyPosts = ({ myPosts }) => {
  const [showInactive, setShowInactive] = useState(false);
  const showInactiveCheckbox = useRef();

  function handleShowInactive(event) {
      console.log(event);
      setShowInactive(showInactive ? false : true);
      event.target.checked = !showInactive;

  }
  return (
    <div className="profilePosts">
        <h3 className="profileSectionTitle">My posts</h3>


        <input ref={showInactiveCheckbox} type="checkbox" onClick={handleShowInactive}/><label>Show Inactive Posts</label>
      {myPosts.length ? (
        myPosts.map((post) => {
          return showInactive || post.active ? (
            <div className="post">
              <h2>{post.title}</h2>
              <h4>{post.messages.length} Messages</h4>
              <button>More Info (not implemented)</button>
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
