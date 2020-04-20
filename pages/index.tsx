import React from "react";
import styled from "styled-components";
import { NextPage } from "next";
import Header from "../component/Header";
import Main from "../component/Main";
// import axios from "axios";
import fetch from "isomorphic-unfetch";
import { GitType } from "../types/git";

const Container = styled.div``;

interface IProps {
  gitData: GitType;
}

const index: NextPage<IProps> = ({ gitData }) => {
  return (
    <Container>
      <Header />
      <Main gitData={gitData} />
    </Container>
  );
};

index.getInitialProps = async () => {
  try {
    const dataRes = await fetch("https://api.github.com/users/yanghyunjun");
    const data = await dataRes.json();
    return { gitData: data };
  } catch (e) {
    console.log(e);
    return { gitData: [] };
  }
};
export default index;
