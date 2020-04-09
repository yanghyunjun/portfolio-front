import React from "react";
import styled from "styled-components";
import { User } from "../data";

const Container = styled.div`
  width: 100%;
  min-height: 45px;
  display: flex;
  align-items: center;
  .header-username-wrapper {
    display: flex;
    margin-left: 16px;
    .header-user-thumbnail {
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }
    .header-username {
      font-size: 12px;
      margin-right: 10px;
    }
  }
`;

const Header: React.FC = () => {
  return (
    <Container>
      <div className="header-username-wrapper">
        <img
          className="header-user-thumbnail"
          src="/static/image/thumbnail.png"
          alt=""
        />
        <div className="header-username">{User.name}</div>
        <div className="header-username">{User.englishName}</div>
      </div>
    </Container>
  );
};

export default Header;
