import React from "react";
import styled from "styled-components";
import { NextPage } from "next";

const Container = styled.div`
  width: 50%;
  .Main-Project-Porsnal-title {
    font-size: 1.2em;
    font-weight: 600;
    color: #636363;
  }
`;

const Porsnal: NextPage = () => {
  return (
    <Container>
      <div className="Main-Project-Porsnal-title">개인</div>
    </Container>
  );
};

export default Porsnal;
