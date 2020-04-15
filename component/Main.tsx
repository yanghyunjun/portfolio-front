import React from "react";
import styled from "styled-components";
import { NextPage } from "next";
import Banner from "./Banner/Banner";
import Link from "next/link";
import { User, Activitys, Prizes } from "../data";

const Container = styled.div`
  .Main-Wrapper {
    padding: 105px;
    display: flex;
    flex-direction: column;
    li {
      margin: 7px;
      font-size: 0.8em;
    }
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
    .Main-Category-title {
      font-size: 0.9em;
      font-weight: 600;
      color: black;
    }
    .Main-Category-font {
      margin-right: 5px;
    }
    .Main-Category-title-github {
      font-size: 0.9em;
      font-weight: 600;
      color: black;
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

const Main: NextPage = () => {
  return (
    <Container>
      <Banner />
      <div className="Main-Wrapper">
        <div className="Main-username">
          <p>{User.name}</p>
          <p>{User.englishName}</p>
        </div>
        <div className="Main-title">{User.title}</div>
        <div className="Main-descript">{User.descript}</div>
        <div className="Main-Activity-wrapper">
          <div className="Main-Category-title">👨‍💻 Activity</div>
          <ul>
            {Activitys.map((activity, index) => (
              <li key={index}>
                <span className="Main-Category-font">{activity.title}</span>
                <span className="Main-Category-font">({activity.date})</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="Main-Prize-wrapper">
          <div className="Main-Category-title">🏆 Prize</div>
          <ul>
            {Prizes.map((prize) => (
              <li>
                <span className="Main-Category-font">{prize.title}</span>
                <span className="Main-Category-font">{prize.prize}</span>
                <span className="Main-Category-font">{prize.date}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="Main-gihbuh-wrapper">
          <div
            role="button"
            className="Main-Category-title-github"
            onClick={() => window.open("https://github.com/yanghyunjun")}
          >
            🐙 Github
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Main;
