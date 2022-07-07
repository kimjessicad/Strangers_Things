import React, { useState, useEffect } from 'react';
import { getProfile } from "../api";
import { Messages } from "../components"
import { MyPosts } from "../components"

const Profile = (props) => {
    let token = "";
    const [myInfo, setMyInfo] = useState({})

    useEffect(()=> {
        token = localStorage.getItem("token")
        async function getMyInfo() {
            const myReturnedInfo = await getProfile(token)
            console.log(myReturnedInfo, "returned info in Profile:useEffect")
            setMyInfo(myReturnedInfo)
        }
        getMyInfo()
    },[])

    return (
        <div>
         I am a profile.  I am not implemented yet.  Once they are built,
         MyPosts and MyMessages will be represented here.
        </div>
    )
}

export default Profile