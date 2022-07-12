import React, { useState, useRef } from "react";


const Messages = ({myMessages, myUsername}) => {
    const [messageFilter,setMessageFilter]=useState("sent")
    const sentButton = useRef();
    const receivedButton = useRef();

    return (
         <div className="profileMessages">
             <h3 className="profileSectionTitle">Messages</h3>

         {myMessages.length
         ? myMessages.map((message) => {
             return (
                 <div key={message._id}
                  className = "message">
                 <h4>From: {message.fromUser.username}</h4>
                 <h5>On Post: {message.post.title}</h5>
                 <p>Message: {message.content}</p>

                 </div>
             )
         })
         : <p>No messages to display.</p>}
         </div>
     )

    
}
   


export default Messages