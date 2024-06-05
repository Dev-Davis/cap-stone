import React from "react";
import { Link } from 'react-router-dom'

function Signup() {

  const signupUser = (e) => {
    e.preventDefault();

    console.log("user signed up...");
  };

  return (
    <div className="Auth text-center">
      <h1 className="text-center">Sign Up for Cap-stone</h1>
      <div className="row">
        <div className="signup col-6 offset-3 text-center">
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
              <button className="btn btn-light" onClick={signupUser}>
                Signup
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
