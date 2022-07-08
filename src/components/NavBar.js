import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const NavBar = ({ isLoggedIn }) => {
  return (
  <BrowserRouter>
    <div id="navbar">
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/login">Login</Link>
      <Routes>
            <Route path ="/profile" element={localStorage.getItem("token") ? <Profile /> : null}>
            </Route>
            <Route path ="/login" element = {<Login setIsLoggedIn={setIsLoggedIn} setUser={setUser}/>}>
            {/*put Register in Login*/}
            </Route>
            <Route exact path="/" element= {<Fragment><NavBar isLoggedIn={isLoggedIn}/></Fragment>}>
            </Route>
            </Routes>
    </div>
  </BrowserRouter>
  )

};

export default NavBar;
