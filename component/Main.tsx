import React from "react";
import styled from "styled-components";
import { NextPage } from "next";
import Banner from "./Banner/Banner";
import { UserData } from "../data";
import { GitType } from "../types/git";
import Activity from "./Activity/Activity";
import Prize from "./Prize/Prize";
import Github from "./Github/Github";
import Stack from "./Stack/Stack";
import Project from "./Project/Project";

const Container = styled.div`
  .Main-Wrapper {
    padding: 105px;
    display: flex;
    flex-direction: column;
    .Main-username {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 25px;
      p {
        font-size: 1.8em;
        font-weight: 700;
        margin-right: 10px;
        color: rgb(55, 53, 47);
      }
    }
    .Main-title {
      font-weight: 600;
      font-size: 1.2em;
      margin-bottom: 10px;
    }
    .Main-descript {
      font-size: 0.9em;
      margin-bottom: 18px;
    }
  }
`;

interface IProps {
  gitData: GitType;
}

const Main: NextPage<IProps> = ({ gitData }) => {
  // console.log(gitData);
  // const router = useRouter();
  return (
    <Container>
      <Banner avata="exit" />
      <div className="Main-Wrapper">
        <div className="Main-username">
          <p>{UserData.name}</p>
          <p>{UserData.englishName}</p>
        </div>
        <div className="Main-title">{UserData.title}</div>
        <div className="Main-descript">{UserData.descript}</div>
        <Activity />
        <Prize />
        <Github gitData={gitData} />
        <Stack />
        <Project />
      </div>
    </Container>
  );
};

export default Main;
