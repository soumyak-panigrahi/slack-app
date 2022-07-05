import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { auth, provider } from "../firebase";

const LoginContainer = styled("div")`
  background-color: #f8f8f8;
  height: 100vh;
  display: grid;
  place-items: center;
`;

const LoginInnerContainer = styled("div")`
  padding: 100px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  & img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
  }

  & button {
    margin-top: 50px;
    text-transform: inherit;
    background-color: #0a8d48;
    color: white;

  &:hover {
      background-color: #0a8d48;
      color: white;
      opacity: 0.8;
      transition: all 0.2s;
    }
  }
`;

export default function Login() {
  const signIn = (e) => {
    e.preventDefault();

    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          src="https://cdn.freebiesupply.com/logos/large/2x/slack-logo-icon.png"
          alt=""
        />
        <h1>Sign in to the Soumyak's Slack Clone</h1>
        <p>soumyak.slack.com</p>

        <Button onClick={signIn}>Sign in with Google</Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
}
