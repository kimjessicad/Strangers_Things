import React, {useState} from "react";
import { registerPerson } from "../api";
import { useNavigate } from 'react-router'

const Register = () => {

    const navigate = useNavigate();
    async function handleSubmit(event) {
        event.preventDefault()
        const backFromApi = await registerPerson(event)
        if (!backFromApi.data) alert("Registration failed")
        navigate('/login')
    }

    return (
        <div>
        <h2>Register New User</h2>
        <form onSubmit={handleSubmit}>
            <label> Username </label>
            <input id="username" type="text" placeholder="enter username"></input>

            <label> Password </label>
            <input id="password" type="text" placeholder="enter password"></input>
            <button type="submit">Register</button>
        </form>
        </div>
    )

}

export default Register