import React from "react";
import styled from "styled-components";
import { UserData } from "../data";
import { NextPage } from "next";
import Link from "next/link";

const Container = styled.div`
  width: 100%;
  min-height: 45px;
  display: flex;
  align-items: center;
  .header-username-wrapper {
    display: flex;
    margin-left: 16px;
    text-decoration: none;
    .header-user-thumbnail {
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }
    .header-username {
      font-size: 12px;
      margin-right: 10px;
      color: black;
    }
  }
`;

const Header: NextPage = () => {
  return (
    <Container>
      <Link href="/">
        <a className="header-username-wrapper">
          <img
            className="header-user-thumbnail"
            src="/static/image/thumbnail.png"
            alt=""
          />
          <div className="header-username">{UserData.name}</div>
          <div className="header-username">{UserData.englishName}</div>
        </a>
      </Link>
    </Container>
  );
};

export default Header;
