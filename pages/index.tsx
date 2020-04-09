import React from "react";
import styled from "styled-components";
import { NextPage } from "next";
import Header from "../component/Header";
import Banner from "../component/Banner/Banner";

const Container = styled.div``;

const index: NextPage = () => {
  return (
    <Container>
      <Header />
      <Banner />
    </Container>
  );
};

export default index;
