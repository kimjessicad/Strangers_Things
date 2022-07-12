import React, {useRef} from "react";
import { sendNewMessage } from "../api";

const MessageForm = ({postId}) => {
    const messageInput = useRef();

    const handleSubmit = (event)=>{
        event.preventDefault();
        const message=event.target[0].value
        const token = localStorage.getItem("token")
        console.log("message & postId",message,postId)
        sendNewMessage(message,postId,token)
        messageInput.current.value=""
    }

    return(
    <form onSubmit={handleSubmit}>
    <label>Send message to seller: </label>
          <input ref={messageInput} type='text' placeholder='Type message here' />
        <button type = "submit">Send</button>
    </form>
    )
}

export default MessageForm