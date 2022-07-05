import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./pages/Header";
import styled from "styled-components";
import Sidebar from "./pages/Sidebar";
import Chat from "./pages/Chat";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Login from "./pages/Login";
import Spinner from "react-spinkit";

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;

const AppLoading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`;

const AppLoadingContents = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > img {
    object-fit: contain;
    height: 100px;
    padding: 20px;
    margin-bottom: 40px;
  }
`;

function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <AppLoading>
        <AppLoadingContents>
          <img
            src="https://cdn.freebiesupply.com/logos/large/2x/slack-logo-icon.png"
            alt=""
          />
          <Spinner name="ball-spin-fade-loader" color="purple" fadeIn="none" />
        </AppLoadingContents>
      </AppLoading>
    );
  }

  return (
    <div>
      {!user ? (
        <Login />
      ) : (
        <Fragment>
          <Header />
          <AppBody>
            <Sidebar />
            <Routes>
              <Route path="/" element={<Chat />} />
            </Routes>
          </AppBody>
        </Fragment>
      )}
    </div>
  );
}

export default App;
