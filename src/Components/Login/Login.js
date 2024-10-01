import React, { useContext } from "react";
import { Link } from 'react-router-dom'

import { AuthState } from "../../App";

export default function Login() {
  
  const [loggedIn, setIsLoggedIn] = useContext(AuthState);

  return (
    <div className="container">
      <h4 className="text-center">Welcome back to</h4>
      <h1 className="text-center">Cap-stone</h1>

      <div className="row">
        <div className="login-container col-6 offset-3 text-center">
          <form>
            <label htmlFor="username">Username:</label>
            <br />
            <input type="text" name="username" placeholder=" Username..." />
            <br />
            <br />
            <label htmlFor="password">Password:</label>
            <br />
            <input type="password" name="password" placeholder=" Password..." />
            <br />
            <br />
            <Link to="/">
              <button className="btn btn-light" onClick={() => setIsLoggedIn(!loggedIn)}>
                Login
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
