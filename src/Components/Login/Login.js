import React from "react";
import { Link } from 'react-router-dom'

export default function Login() {
  const loginUser = (e) => {
    e.preventDefault();

    console.log("user logged in...");
  };
  return (
    <div className="container">
      <h1 className="text-center">Login to Cap-stone</h1>
      <div className="row">
        <div className="login col-6 offset-3 text-center">
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
              <button className="btn btn-light" onClick={loginUser}>
                Login
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
