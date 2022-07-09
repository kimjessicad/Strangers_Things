import React, {useState} from "react";
import { useNavigate } from 'react-router'
import { login, getProfile } from "../api";

const Login = ({setUser, setIsLoggedIn}) => {
    let navigate = useNavigate();
    const [username, setUsername] = useState ("");
    const [password, setPassword] = useState ("");

    async function handleSubmit(event) {
        event.preventDefault()
        const backFromAPI = await login(event)
        if (backFromAPI === localStorage.token) {
            setUser(getProfile())
            setIsLoggedIn(true)
            navigate('/')
        }
    }
    function handleClick(){
        navigate('/register')
    }

    return (
        <div id="loginPage">
            <h2> Login </h2>
           <form onSubmit={handleSubmit}>
                <label> Username </label>
                <input id="username" type="text" placeholder="enter username"></input>
                <label> Password </label>
                <input id="password" type="text" placeholder="enter password"></input>
              <button type ="submit">Login</button>
            </form>
            <button onClick={handleClick}>New user? Click here to register</button>
        </div>
    )
}

export default Login;