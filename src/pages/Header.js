import React from "react";
import styled from "styled-components";

// MUI Components
import Avatar from "@mui/material/Avatar";

// ICONS
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

//Firebase
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import { useDocument } from "react-firebase-hooks/firestore";
import { useSelector } from "react-redux";
import { selectRoomId } from "../features/appSlice";

const HeaderContainer = styled("div")`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  background-color: var(--slack-color);
  color: #fff;
`;

const HeaderLeft = styled("div")`
  flex: 0.3;
  display: flex;
  align-items: center;
  margin-left: 20px;

  & .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: auto;
  }
`;

const HeaderAvatar = styled(Avatar)`
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const HeaderSearch = styled("div")`
  flex: 0.4;
  opacity: 1;
  border-radius: 6px;
  background-color: #421f44;
  text-align: center;
  display: flex;
  padding: 0 50px;
  color: gray;
  border: 1px solid gray;

  & input {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    outline: none;
    color: white;
  }
`;

const HeaderRight = styled("div")`
  flex: 0.3;
  display: flex;
  align-items: flex-end;

  & .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 20px;
  }
`;

export default function Header() {
  const [user] = useAuthState(auth);
  const roomId = useSelector(selectRoomId);
  const [roomDetails] = useDocument(
    roomId && db.collection("rooms").doc(roomId)
  );

  console.log(user);

  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderAvatar
          src={user?.photoURL}
          alt={user?.displayName}
          onClick={() => auth.signOut()}
        />
        <AccessTimeIcon />
      </HeaderLeft>
      <HeaderSearch>
        <SearchIcon />
        <input
          placeholder={`Search ${
            roomId && roomDetails ? roomDetails?.data().name : "channel"
          }`}
        />
      </HeaderSearch>
      <HeaderRight>
        <HelpOutlineIcon />
      </HeaderRight>
    </HeaderContainer>
  );
}
