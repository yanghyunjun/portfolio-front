import React from "react";
import styled from "styled-components";
import { NextPage } from "next";
import { TeamProjectData } from "../../../data";
import Link from "next/link";

const Container = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  .Main-Project-Team-title {
    font-size: 1.2em;
    font-weight: 600;
    color: #636363;
  }
  .Main-Project-Team-list {
    margin-right: 5px;
    font-size: 0.9em;
    color: #636363;
  }
`;

const Team: NextPage = () => {
  return (
    <Container>
      <div className="Main-Project-Team-title">팀</div>
      <ul>
        {TeamProjectData.map((team, index) => (
          <div key={index}>
            <Link href="project/team/[title]" as={`project/team/${team.title}`}>
              <a className="Main-Project-Team-list">{team.title}</a>
            </Link>
          </div>
        ))}
      </ul>
    </Container>
  );
};

export default Team;
