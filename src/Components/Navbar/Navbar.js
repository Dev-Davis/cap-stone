import React, { useContext } from "react";

import { Link } from "react-router-dom";

import { AuthState } from "../../App";

export default function Navbar() {
  // const urlId = props.user[0].userName;
  // const profilePath = `/user/${urlId}`;
  // const user = props.user;

  const [loggedIn, setLoggedIn] = useContext(AuthState);

  const loggedInNav = () => {
    return (
      <nav className="navbar navbar-fixed-top navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="navbar-brand">CapStone</div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/profile'>
                  Profile
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link to="/account" className="dropdown-item">
                      Account
                    </Link>
                  </li>
                  <li>
                    <Link to="/settings" className="dropdown-item">
                      Settings
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link to="/login" className="dropdown-item">
                      Logout
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <Link
              to="/login"
              className="nav-link logout"
              href="#"
              tabIndex="-1"
              aria-disabled="true"
              onClick={() => setLoggedIn(!loggedIn)}
            >
              Logout
            </Link>
          </div>
        </div>
      </nav>
    );
  };

  const loggedOutNav = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="navbar-brand">CapStone</div>
          <Link
            to="/"
            className="nav-link logout"
            href="#"
            tabIndex="-1"
            aria-disabled="true"
            onClick={() => setLoggedIn(!loggedIn)}
          >
            Login
          </Link>
        </div>
      </nav>
    );
  };

  return <div>{loggedIn ? loggedInNav() : loggedOutNav()}</div>;
}
