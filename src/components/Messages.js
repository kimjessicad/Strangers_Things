import React, { useState, useRef } from "react";


const Messages = ({myMessages, myUsername}) => {
    const [messageFilter,setMessageFilter]=useState("sent")
    const sentButton = useRef();
    const receivedButton = useRef();
    
    function handleInboxButtons(event) {
        const filterSetting = (event.target.value)
        setMessageFilter(filterSetting);
        console.log(filterSetting,messageFilter)
        sentButton.current.checked=(filterSetting==="sent");
        receivedButton.current.checked=(filterSetting==="received");
    }

    return (
         <div className="profileMessages">
             <h3 className="profileSectionTitle">Messages</h3>
             <div className = "inboxButtons" onChange={handleInboxButtons}>
                 <label>Received</label><input ref={sentButton} type="radio" value="sent" />
                 <label>Sent</label><input ref={receivedButton} type="radio" value="received" />
             </div>
         {myMessages.length
         ? myMessages.map((message) => {
             return (
                 <div key={message._id}
                  className = {(((messageFilter === 'sent') && (message.fromUser.username === myUsername)) || ((messageFilter === 'received')&&(message.fromUser.username != myUsername))) 
                  ? "message": "hidden"}>
                 <h4>From: {message.fromUser.username}</h4>
                 <h5>Sent: {message.updatedAt}</h5>
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