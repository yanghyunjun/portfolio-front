import React from "react";
import styled from "styled-components";
import { StacksData } from "../../data";

const Container = styled.div`
  li {
    margin: 7px;
    font-size: 0.9em;
  }
  ul {
    margin-bottom: 12px;
  }
  .Main-Stack-title {
    font-size: 1.2em;
    font-weight: 500;
    color: black;
    padding: 3px 2px;
  }
  .Main-Stack-descript {
    max-width: 100%;
    width: 100%;
    white-space: pre-wrap;
    word-break: break-word;
    caret-color: rgb(55, 53, 47);
    padding: 3px 2px;
    font-size: 0.9em;
  }
  .Main-Stack-font {
    margin-right: 5px;
  }
`;

const Stack: React.FC = () => {
  return (
    <Container>
      <div className="Main-Stack-title">📚 Stack</div>
      <div className="Main-Stack-descript">다룰 수 있는 기술/언어들입니다.</div>
      <ul>
        {StacksData.map((stack, index) => (
          <li key={index}>
            <span className="Main-Stack-font">{stack.name}</span>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Stack;
