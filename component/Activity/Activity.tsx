import React from "react";
import styled from "styled-components";
import { ActivitysData } from "../../data";

const Container = styled.div`
  li {
    margin: 7px;
    font-size: 0.8em;
  }
  .Main-Activity-title {
    font-size: 0.9em;
    font-weight: 600;
    color: black;
  }
  .Main-Activity-font {
    margin-right: 5px;
  }
`;

const Activity: React.FC = () => {
  return (
    <Container>
      <div className="Main-Category-title">👨‍💻 Activity</div>
      <ul>
        {ActivitysData.map((activity, index) => (
          <li key={index}>
            <span className="Main-Category-font">{activity.title}</span>
            <span className="Main-Category-font">({activity.date})</span>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Activity;
