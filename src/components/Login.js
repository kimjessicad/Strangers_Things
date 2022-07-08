import React, {useState} from "react";
import { login } from "../api";

const Login = ({setUser}) => {
    const [username, setUsername] = useState ("");
    const [password, setPassword] = useState ("");

    async function handleSubmit(event) {
        event.preventDefault()
        const backFromAPI = await login(event)
        if (backFromAPI === localStorage.token) {
            setUser(username)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label> Username </label>
            <input id="username" type="text" placeholder="enter username"></input>

            <label> Password </label>
            <input id="password" type="text" placeholder="enter password"></input>
            <button type ="submit">Login</button>
        </form>
        
    )
}

export default Login;