import React from "react";
import styled from "styled-components";
import { NextPage } from "next";
import Header from "../component/Header";
import Main from "../component/Main";

const Container = styled.div``;

const index: NextPage = () => {
  return (
    <Container>
      <Header />
      <Main />
    </Container>
  );
};

export default index;
