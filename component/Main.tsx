import React from "react";
import styled from "styled-components";
import { NextPage } from "next";
import Banner from "./Banner/Banner";
import { User } from "../data";

const Container = styled.div`
  .Main-Wrapper {
    padding: 105px;
    display: flex;
    .Main-username {
      display: flex;
      flex-wrap: wrap;
      p {
        font-size: 32px;
        font-weight: 700;
      }
    }
  }
`;

const Main: NextPage = () => {
  return (
    <Container>
      <Banner />
      <div className="Main-Wrapper">
        <div className="Main-username">
          <p>{User.name}</p>
          <p>{User.englishName}</p>
        </div>
      </div>
    </Container>
  );
};

export default Main;
