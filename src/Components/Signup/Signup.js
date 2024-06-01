import React from "react";
import { Button, Form } from "react-bootstrap";

function Signup() {
  return (
    <div className="Auth text-center">
      <h1 className="signup-title">This is CAPstone</h1>
      <p>Where hat lovers unite</p>
      <hr />
      <Form className="col-4 offset-4">
        <Form.Group controlId="formGroupEmail">
          <Form.Label>Choose and Email address</Form.Label>
          <br />
          <Form.Control type="email" placeholder=" Enter email..." />
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <Form.Label>Choose a Password</Form.Label>
          <br />
          <Form.Control type="password" placeholder=" Password..." />
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <Form.Label>Confirm Password</Form.Label>
          <br />
          <Form.Control type="password" placeholder=" Password..." />
        </Form.Group>
      </Form>
      <p> or </p>
      <Button className="btn btn-primary">Login with Google</Button>
      {/* <Link className="btn btn-dark" to={SignUpLink} onClick={this.newUser}>SignUp</Link> */}
    </div>
  );
}

export default Signup;
