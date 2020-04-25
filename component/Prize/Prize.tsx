import React from "react";
import styled from "styled-components";
import { PrizesData } from "../../data";

const Container = styled.div`
  li {
    margin: 7px;
    font-size: 0.9em;
  }
  .Main-Prize-title {
    font-size: 1.2em;
    font-weight: 500;
    color: black;
  }
  .Main-Prize-font {
    margin-right: 5px;
  }
`;

const Prize: React.FC = () => {
  return (
    <Container>
      <div className="Main-Prize-title">🏆 Prize</div>
      <ul>
        {PrizesData.map((prize, index) => (
          <li key={index}>
            <span className="Main-Prize-font">{prize.title}</span>
            <span className="Main-Prize-font">{prize.prize}</span>
            <span className="Main-Prize-font">{prize.date}</span>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Prize;
