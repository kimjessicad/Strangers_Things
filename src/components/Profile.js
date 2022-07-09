import React, { useState, useEffect } from 'react';
import { getProfile } from "../api";
import { Messages } from "../components"
import { MyPosts } from "../components"

const Profile = ({user}) => {
    let token = "";
    const [myInfo, setMyInfo] = useState({})
    const [myMessages,setMyMessages] = useState([])
    const [myPosts, setMyPosts] = useState([])

    useEffect(()=> {
        token = localStorage.getItem("token")
        async function getMyInfo() {
            const myReturnedInfo = await getProfile(token)
            console.log(myReturnedInfo, "returned info in Profile:useEffect")
            setMyInfo(myReturnedInfo)
            setMyMessages(myReturnedInfo.messages)
            setMyPosts(myReturnedInfo.posts)
        }
        getMyInfo()
    },[])

    return (
        <div>
          <h2>{myInfo.username}'s Profile</h2>
          <Messages myMessages={myMessages} />
          <MyPosts myPosts={myPosts} />

        </div>
    )
}

export default Profile