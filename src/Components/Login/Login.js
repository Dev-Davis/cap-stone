import React from "react";
import { Link } from 'react-router-dom'

export default function Login(props) {
  
  console.log(props)

  return (
    <div className="container">
      <h1 className="text-center">Login to Cap-stone</h1>
      <div className="row">
        <div className="login col-lg-6 text-center">
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
              <button className="btn btn-light" onClick={props.userLogging}>
                Login
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
