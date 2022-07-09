import React from "react";
import { sendNewMessage } from "../api";

const MessageForm = ({postId}) => {

    const handleSubmit = (event)=>{
        event.preventDefault();
        const message=event.target[0].value
        const token = localStorage.getItem("token")
        console.log("message & postId",message,postId)
        sendNewMessage(message,postId,token)
        
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