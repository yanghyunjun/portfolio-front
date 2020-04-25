import React from "react";
import styled from "styled-components";
import { ActivitysData } from "../../data";
import Link from "next/link";

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
  .Main-Activity-font-wrapper {
    color: black;
    .Main-Activity-font {
      margin-right: 5px;
    }
  }
`;

const Activity: React.FC = () => {
  return (
    <Container>
      <div className="Main-Activity-title">👨‍💻 Activity</div>
      <ul>
        {ActivitysData.map((activity, index) => (
          <div key={index}>
            <Link href="activity/[title]" as={`activity/${activity.title}`}>
              <a className="Main-Activity-font-wrapper">
                <li>
                  <span className="Main-Activity-font">
                    {activity.title} ({activity.date})
                  </span>
                </li>
              </a>
            </Link>
          </div>
        ))}
      </ul>
    </Container>
  );
};

export default Activity;
