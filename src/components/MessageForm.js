import React from "react";

const MessageForm = () => {

    return(
    <form onSubmit={handleSubmit}>
    <label>Message</label>
          <input type='text' placeholder='Type message here' />
        <button type = "submit">Send</button>
    </form>
    )
}

export default MessageForm