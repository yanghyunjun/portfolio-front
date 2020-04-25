import React from "react";
import styled from "styled-components";
import Team from "./Team/Team";
import Persnal from "./Personal/Persnal";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  .Main-Project-title {
    font-size: 1.2em;
    font-weight: 500;
    color: black;
    padding: 3px 2px;
  }
  .Main-Project-descript {
    max-width: 100%;
    width: 100%;
    white-space: pre-wrap;
    word-break: break-word;
    caret-color: rgb(55, 53, 47);
    padding: 3px 2px;
    font-size: 0.9em;
    margin-bottom: 24px;
  }
  .Main-Project-list {
    display: flex;
  }
`;

const Project: React.FC = () => {
  return (
    <Container>
      <div className="Main-Project-title">🌎 Project</div>
      <div className="Main-Project-descript">
        제가 공부하면서 만든 개인 및 대회에서 진행한 웹 프로젝트 작업물입니다.
      </div>
      <div className="Main-Project-list">
        <Persnal />
        <Team />
      </div>
    </Container>
  );
};

export default Project;
