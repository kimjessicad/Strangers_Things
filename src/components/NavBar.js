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
    navigate('/')
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