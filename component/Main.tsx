import React from "react";
import styled from "styled-components";
import { NextPage } from "next";
import Banner from "./Banner/Banner";
import { UserData } from "../data";
import { GitType } from "../types/git";
import Activity from "./Activity/Activity";
import Prize from "./Prize/Prize";
import Github from "./Github/Github";

const Container = styled.div`
  .Main-Wrapper {
    padding: 105px;
    display: flex;
    flex-direction: column;
    .Main-username {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 10px;
      p {
        font-size: 1.6em;
        font-weight: 700;
        margin-right: 10px;
      }
    }
    .Main-title {
      font-weight: 600;
      font-size: 1em;
      margin-bottom: 10px;
    }
    .Main-descript {
      font-size: 0.7em;
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
      <Banner />
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
      </div>
    </Container>
  );
};

export default Main;
