import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import SearchBar from "./SearchBar";

const NavBar = ({
  isLoggedIn,
  setIsLoggedIn,
  posts,
  setActiveSearch,
  setSearchMatches,
}) => {
  let navigate = useNavigate();

  function handleClickHome() {
    console.log(posts, "POSTS!#%@#%@#%#%@#%@#%@");
    navigate("/");
  }
  function handleClickProfile() {
    navigate("/profile");
  }
  function handleClickLogin() {
    navigate("/login");
  }
  const handleClickLogout = (event) => {
    event.preventDefault();
    setIsLoggedIn(false);
    localStorage.removeItem("token");
    navigate("/");
  };
  useEffect(() => {}, [posts]);

  return (
    <div className="navbar" id="navbar">
      <div className="navBarLeft">
        <h1>Stranger's Things</h1>
        <div className="buttonCluster">
          <button className="navbutton" onClick={handleClickHome}>
            Home
          </button>
          {isLoggedIn ? (
            <>
              <button className="navbutton" onClick={handleClickProfile}>
                Profile
              </button>
              <button className="navbutton" onClick={handleClickLogout}>
                Logout
              </button>
            </>
          ) : (
            <button className="navbutton" onClick={handleClickLogin}>
              Login
            </button>
          )}
        </div>
      </div>
      {window.location.pathname === "/" ? (
        <SearchBar
          posts={posts}
          setSearchMatches={setSearchMatches}
          setActiveSearch={setActiveSearch}
        />
      ) : null}
    </div>
  );
};

export default NavBar;
