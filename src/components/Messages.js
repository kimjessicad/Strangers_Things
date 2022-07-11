import React, { useEffect, useState } from "react";


const Messages = ({myMessages, myUsername}) => {
    const [messageFilter,setMessageFilter]=useState("sent")
    let receivedMessages = [], sentMessages=[];
    receivedMessages = myMessages.filter((message)=>(message.fromUser.username != myUsername))
    sentMessages = myMessages.filter((message)=>(message.fromUser.username === myUsername))
    
    function handleInboxButtons(event) {
        const filterSetting = event.target.value();
        setMessageFilter(filterSetting);
    }

    return (
         <div className="profileMessages">
             <h3 className="profileSectionTitle">Messages</h3>
             <div className = "inboxButtons" onChange={handleInboxButtons}>
                 <input type="radio" value="sent" />
                 <input type="radio" value="received" />
             </div>
         {myMessages.length
         ? myMessages.map((message) => {
             return (
                 <div key={message._id} className="message">
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