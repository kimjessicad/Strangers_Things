import React, { useEffect } from "react";

const Messages = ({myMessages}) => {
     return (
         myMessages.length ?
         myMessages.map((message => {
             return (
                 <>
                 <h4>From: {message.fromUser.username}</h4>
                 <h5>Sent: {message.updatedAt}</h5>
                 <h5>On Post: {message.post.title}</h5>
                 <p>Message: {message.content}</p>

                 </>
             )
         }))
         : <p>You have no messages.</p>
     )

    
}
   


export default Messages