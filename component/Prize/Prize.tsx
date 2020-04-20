import React from "react";
import styled from "styled-components";
import { PrizesData } from "../../data";

const Container = styled.div`
  li {
    margin: 7px;
    font-size: 0.8em;
  }
  .Main-Prize-title {
    font-size: 0.9em;
    font-weight: 600;
    color: black;
  }
  .Main-Prize-font {
    margin-right: 5px;
  }
`;

const Prize: React.FC = () => {
  return (
    <Container>
      <div className="Main-Category-title">🏆 Prize</div>
      <ul>
        {PrizesData.map((prize, index) => (
          <li key={index}>
            <span className="Main-Category-font">{prize.title}</span>
            <span className="Main-Category-font">{prize.prize}</span>
            <span className="Main-Category-font">{prize.date}</span>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Prize;
