import React from 'react';
import { useHistory } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {

    const history = useHistory();

  return (
      <div className="nav">
          <img
              onClick={ () => history.push("/")}
              className="nav_logo"
              src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
              alt="Netflix logo" />
          
          <img
              onClick={ () => history.push("/profile")}
              className="nav_avatar"
              src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="Netflix user"/>
      </div>
  )
}

export default Navbar;

