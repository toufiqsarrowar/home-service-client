import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../../App";
import logo from "../../../img/logo.png";

const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  return (
    <nav class="navbar navbar-expand-lg navbar-light">
      
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
              <Link class="nav-link active" to="/"><img src={logo} alt=""/></Link>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item mr-4">
              <Link class="nav-link active" to="/">Services</Link>
            </li>
            <li class="nav-item mr-4">
              <Link class="nav-link" to="/">
                How It Works
              </Link>
            </li>
            <li class="nav-item mr-4">
            <Link class="nav-link " to="/">
                Reviews
              </Link>
            </li>
            <li class="nav-item mr-4">
            <Link class="nav-link" to="/">
                About
              </Link>
            </li>
            <li class="nav-item mr-4">
            <Link class="nav-link" to="/admin">
                Admin
              </Link>
            </li>
            <li class="nav-item mr-4">
              <Link class="nav-link " to="/login">
               {
                 loggedInUser.email ? 'Log Out': 'Login'
               }
              </Link>
            </li>
          </ul>
        </div>
    </nav>
  );
};

export default Navbar;
