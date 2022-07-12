import React, { useState, useEffect } from 'react';
import { getProfile } from "../api";
import { Messages } from "../components"
import { MyPosts } from "../components"

const Profile = ({setNewPostCreated}) => {
    let token = "";
    const [myInfo, setMyInfo] = useState({})
    const [myMessages,setMyMessages] = useState([])
    const [myPosts, setMyPosts] = useState([])
   
    useEffect(()=> {
        token = localStorage.getItem("token")
        async function getMyInfo() {
            const myReturnedInfo = await getProfile(token)
            setMyInfo(myReturnedInfo)
            setMyMessages(myReturnedInfo.messages)
            setMyPosts(myReturnedInfo.posts)
            console.log(myReturnedInfo)
        }
        getMyInfo()
    },[])

    return (
        <div>
          <h2>{myInfo.username}'s Profile</h2>
          <Messages myMessages={myMessages} />
          <MyPosts myPosts={myPosts} setNewPostCreated={setNewPostCreated} />

        </div>
    )
}

export default Profile