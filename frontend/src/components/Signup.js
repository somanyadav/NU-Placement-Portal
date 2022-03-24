import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import styled from "styled-components";
import { auth } from "../firebase";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);

      await createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          // created new account
          console.log("created new account");
          const user = userCredential.user;
          var actionCodeSettings = {
            url: "http://localhost:3000/login",
          };

          sendEmailVerification(auth.currentUser, actionCodeSettings)
            .then(function () {
              // Verification email sent.
              console.log("Email verification sent");
              setError("Email verification link sent");
            })
            .catch(function (error) {
              console.log(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("error code ", errorCode);
          console.log("error message ", errorMessage);
        });
      // history.push("/");
    } catch (error) {
      setError("Failed to create an account");
      console.log(error);
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
              <img src="https://images.shiksha.com/mediadata/images/1571910870phpnRxM70.jpg"
                    alt="user image " style={{ height: "70px"}}
                  />
                  </center>
                <h2 className="text-center mb-4 pt-3" style={{ fontFamily: 'Dosis'}}>Sign Up</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                  <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Your Email" ref={emailRef} required />
                  </Form.Group>
                  <Form.Group id="password">
                    <Form.Label className="pt-2">Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Your Password" ref={passwordRef} required />
                  </Form.Group>
                  <Form.Group id="password-confirm">
                    <Form.Label className="pt-2">Password Confirmation</Form.Label>
                    <Form.Control
                      type="password"
                      ref={passwordConfirmRef}
                      required
                      placeholder="Confirm Your Password"
                    />
                  </Form.Group>
                  <Button
                    disabled={loading}
                    className="w-100 mt-4"
                    type="submit"
                  >
                    Sign Up
                  </Button>
                </Form>
              </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
              Already have an account? <Link to="/">Log In</Link>
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
