import React, {useState} from "react";
import { login } from "../api";



async function handleSubmit(event) {
    event.preventDefault()
    const backFromAPI = await login(event)
}

const Login = () => {
    const [username, setUsername] = useState ("");
    const [password, setPassword] = useState ("");

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