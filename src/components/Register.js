import React, {useState} from "react";
import { registerPerson } from "../api";

const Register = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(event) {
        event.preventDefault()
        const backFromAPI = await registerPerson(event)
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