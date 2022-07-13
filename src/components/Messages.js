import React from "react";

const Messages = ({ myMessages, myUsername }) => {
  return (
    <div className="profileMessages">
      <h3 className="profileSectionTitle">Messages</h3>

      {myMessages.length ? (
        myMessages.map((message) => {
          return (
            <div key={message._id} className="message">
              <p>
                <label className="messageLabel">From: </label>
                {message.fromUser.username}
              </p>
              <p>
                <label className="messageLabel">On Post: </label>
                {message.post.title}
              </p>
              <p>
                <label className="messageLabel">Message: </label>
                {message.content}
              </p>
            </div>
          );
        })
      ) : (
        <p>No messages to display.</p>
      )}
    </div>
  );
};

export default Messages;
