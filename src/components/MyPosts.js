import React from "react";

const MyPosts = ({myPosts}) => {
    return (
        myPosts.length
        ?
        myPosts.map((post)=>{
            return <>
            <h2>{post.title}</h2>
            <h4>{post.messages.length} Messages</h4>
            <button>More Info (not implemented)</button>
            </>
        })
        :
        <p>You have no active posts.</p>
    )
    
}


export default MyPosts