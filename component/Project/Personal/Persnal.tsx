import React from "react";
import styled from "styled-components";
import { NextPage } from "next";
import { PersonalProjectData } from "../../../data";
import Link from "next/link";

const Container = styled.div`
  width: 50%;
  .Main-Project-Porsnal-title {
    font-size: 1.2em;
    font-weight: 600;
    color: #636363;
  }
  .Main-Project-personal-list-wrapper {
    margin-bottom: 8px;
    .Main-Project-personal-list {
      margin-right: 5px;
      font-size: 0.9em;
      color: #636363;
    }
  }
`;

const Persnal: NextPage = () => {
  return (
    <Container>
      <div className="Main-Project-Porsnal-title">개인</div>
      <ul>
        {PersonalProjectData.map((team, index) => (
          <div className="Main-Project-personal-list-wrapper" key={index}>
            <Link
              href="project/personal/[title]"
              as={`project/personal/${team.title}`}
            >
              <a className="Main-Project-personal-list">{team.title}</a>
            </Link>
          </div>
        ))}
      </ul>
    </Container>
  );
};

export default Persnal;
