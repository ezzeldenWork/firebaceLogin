import React, {useRef, useState} from "react";
import {Card, Form, Button, Alert} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useAuth} from "../context/AuthContect";

export default function ForgotPassword() {
  const emailRef = useRef();
  const {resetPassword} = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setError("DM");
    } catch {
      setError("Failed to Rest Password");
    }

    setLoading(false);
  }
  return (
    <>
      <Card style={{backgroundColor: "#ddd", color: "#333"}}>
        <Card.Body>
          <h2 className="text-center mb-4">Passwoed Reset</h2>
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
            <Button disabled={loading} className="w-100 mt-4" type="submit">
              Reset Password
            </Button>
          </Form>
          <div className="w-100 text-center mt-2 p-2" style={{color: "#333"}}>
            <Link to="/login"> Log In </Link>
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
