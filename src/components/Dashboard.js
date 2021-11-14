import React, {useState} from "react";
import {Card, Form, Button, Alert} from "react-bootstrap";
import {Link, useHistory} from "react-router-dom";
import {useAuth} from "../context/AuthContect";

export default function Dashboard() {
  const [error, setError] = useState("");
  const history = useHistory();
  const {currentUser, logout} = useAuth();

  async function handleLogOut() {
    setError("");
    try {
      await  logout();
      history.push("/login");
    } catch {
      setError("Filed To Log Out");
    }
  }

  return (
    <>
      <Card style={{color: "#333"}}>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email: </strong> {currentUser.email}
          <Link to="/update-profile " className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
        </Card.Body>
      </Card>
      <div
        className="w-100 text-center mt-2 p-2"
        style={{backgroundColor: "#ddd", color: "#333", borderRadius: "5px"}}
      >
        <Button variant="link" onClick={handleLogOut}>
          Log Out
        </Button>
      </div>
    </>
  );
}
