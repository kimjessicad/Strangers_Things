import React from "react";
import { useNavigate } from 'react-router'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const NavBar = ({isLoggedIn, setIsLoggedIn}) => {
  let navigate = useNavigate();

  function handleClickHome() {
    navigate('/')
  }
  function handleClickProfile() {
    navigate('/profile')
  }
  function handleClickLogin() {
    navigate('/login')
  }
  const handleClickLogout = (event)=>{
    event.preventDefault();
    setIsLoggedIn(false);
    localStorage.removeItem("token");
  }

  return (
    
    <div className = 'navbar' id='navbar'>
      <h1>Stranger's Things</h1>
      <div className='buttonCluster'>
      <button className = 'navbutton' onClick={handleClickHome}>Home</button>
      {isLoggedIn ?<>
      <button className = 'navbutton' onClick={handleClickProfile}>Profile</button>
      <button className = 'navbutton' onClick={handleClickLogout}>Logout</button>
      </>
      :
      <button className = 'navbutton' onClick={handleClickLogin}>Login</button>
      }
      </div>
    </div>
  )

};

export default NavBar;


{/* <div id ="navbar">
            {
            ({isLoggedIn})
            ? <>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            </>

            : <>
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <button onClick={handleLogoutButton}>Logout</button>
            </> } */}





// async function handleSubmit(event) {
//   event.preventDefault()
//   const backFromAPI = await login(event)
//   if (backFromAPI === localStorage.token) {
//       setUser(username)
//       setIsLoggedIn(true)
//       navigate('/')
//   }
// }


// return (
//   <div id="loginPage">
//       <h2> Login </h2>
//      <form onSubmit={handleSubmit}>
//           <label> Username </label>
//           <input id="username" type="text" placeholder="enter username"></input>
//           <label> Password </label>
//           <input id="password" type="text" placeholder="enter password"></input>
//         <button type ="submit">Login</button>
//       </form>
//       <button onClick={handleClick}>New user? Click here to register</button>
//   </div>