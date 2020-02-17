import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./index.scss";

const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  return (
    <div>
      <Form>
        <Form.Group controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            onChange={e => setUsername(e.target.value)}
            value={username}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            onChange={e => setPassword(e.target.value)}
            value={password}
          />
        </Form.Group>
        <Button variant="" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
