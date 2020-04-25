import React from "react";
import styled from "styled-components";
import { ActivitysData } from "../../data";

const Container = styled.div`
  li {
    margin: 7px;
    font-size: 0.9em;
  }
  .Main-Activity-title {
    font-size: 1.2em;
    font-weight: 500;
    color: black;
  }
  .Main-Activity-font {
    margin-right: 5px;
  }
`;

const Activity: React.FC = () => {
  return (
    <Container>
      <div className="Main-Activity-title">👨‍💻 Activity</div>
      <ul>
        {ActivitysData.map((activity, index) => (
          <li key={index}>
            <span className="Main-Activity-font">{activity.title}</span>
            <span className="Main-Activity-font">({activity.date})</span>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Activity;
