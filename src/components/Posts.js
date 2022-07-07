//this component renders a view of posts to unauthenticated users, following step 1 of the development path in the workshop

import React from "react";

const Posts = (props) => {
  const posts = props.posts.data;
  console.log(posts)
  return (
    <div>
      { posts.posts.length ?
      posts.posts.map((e)=>(
          <div key={e.id} className="post">
             <h2 className="postTitle">
                 { e.title }
             </h2>
             <h3>{e.price}</h3>
             <p>{e.description}</p>
             <p>{e.location}</p>
             {e.willDeliver ? <p> Will deliver </p> : null}
          </div>
      )
      ):null }
    </div>
  );
};

export default Posts;
