import React from "react";

const MessageForm = () => {

    const handleSubmit = (event)=>{
        event.preventDefault();
        
    }

    return(
    <form onSubmit={handleSubmit}>
    <label>Message</label>
          <input type='text' placeholder='Type message here' />
        <button type = "submit">Send</button>
    </form>
    )
}

export default MessageForm