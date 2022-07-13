import React from "react";
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
        <div id="registerPage">
            <h2>Register New User</h2>
            <form onSubmit={handleSubmit}>
                <>
                    <input id="username" type="text" placeholder="Username"></input>
                </>
                <>
                    <input id="password" type="text" placeholder="Password"></input>
                </>
                <button type="submit">Register</button>
            </form>
        </div>
    )

}

export default Register