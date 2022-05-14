import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import "../Home.css";
import styled from "styled-components";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  // const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const auth = getAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      // await login(emailRef.current.value, passwordRef.current.value);
      await signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          if (user) {
            history.push("/");
          } else {
            setError("User doesn't exist");
          }
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError("User doesn't exist");
        });
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  }

  return (
    <>
      <NUWrapper>
        <Container
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "100vh" }}
        >
          <div className="w-100" style={{ maxWidth: "400px" }}>
            <Card>
              <Card.Body>
                <center>
                  <img
                    src="https://images.shiksha.com/mediadata/images/1571910870phpnRxM70.jpg"
                    alt="user image "
                    style={{ height: "70px" }}
                  />
                </center>
                <h2
                  className="text-center mb-4 pt-3"
                  style={{ fontFamily: "Dosis" }}
                >
                  Log In
                </h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                  <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Type Your Email"
                      ref={emailRef}
                      required
                    />
                  </Form.Group>
                  <Form.Group id="password">
                    <Form.Label className="pt-2">Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Type Your Password"
                      ref={passwordRef}
                      required
                    />
                  </Form.Group>
                  <Button
                    disabled={loading}
                    className="w-100 mt-4"
                    type="submit"
                  >
                    Log In
                  </Button>
                </Form>
                <div className="w-100 text-center mt-3">
                  <Link to="/forgot-password">Forgot Password?</Link>
                </div>
              </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
              Need an account? <Link to="/signup">Sign Up</Link>
            </div>
          </div>
        </Container>
      </NUWrapper>
    </>
  );
}

const NUWrapper = styled.body`
  background-image: url(https://learn.niituniversity.in/public/images/bnr.jpg);
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #999;
  margin: 0;
  padding: 0;
  font-family: "Manjari", sans-serif;
`;
