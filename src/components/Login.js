import React, {useRef, useState} from "react";
import {Card, Form, Button, Alert} from "react-bootstrap";
import {Link, useHistory} from "react-router-dom";
import {useAuth} from "../context/AuthContect";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const {login} = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to Log In");
    }

    setLoading(false);
  }
  return (
    <>
      <Card style={{backgroundColor: "#ddd", color: "#333"}}>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                style={{backgroundColor: "#333", color: "#ddd"}}
                type="email"
                ref={emailRef}
                required
              />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                style={{backgroundColor: "#333", color: "#ddd"}}
                type="password"
                ref={passwordRef}
                required
              />
            </Form.Group>
            <Button disabled={loading} className="w-100 mt-4" type="submit">
              Login
            </Button>
          </Form>
          <div className="w-100 text-center mt-2 p-2" style={{color: "#333"}}>
            <Link to="/forgot-password">  Forgot Password </Link>
          </div>
        </Card.Body>
      </Card>
      <div
        className="w-100 text-center mt-2 p-2"
        style={{backgroundColor: "#ddd", color: "#333", borderRadius: "5px"}}
      >
        Need An Acount? <Link to="/signup"> SingUp </Link>
      </div>
    </>
  );
}
