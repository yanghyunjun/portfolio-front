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
      <Main gitData={gitData} />
    </Container>
  );
};

index.getInitialProps = async () => {
  try {
    const gitDataRes = await fetch("https://api.github.com/users/yanghyunjun");
    const gitData = await gitDataRes.json();
    return { gitData };
  } catch (e) {
    console.log(e);
    return { gitData: [] };
  }
};
export default index;
