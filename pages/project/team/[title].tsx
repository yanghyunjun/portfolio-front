import React, { useState } from "react";
import { NextPage } from "next";
import styled from "styled-components";
import { TeamProjectData } from "../../../data";
const Container = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 915px) {
    justify-content: flex-start;
    margin-left: 120px;
  }
  @media (max-width: 415px) {
    margin-left: 30px;
  }
  .team-projcet-Wrapper {
    display: flex;
    flex-direction: column;
    .team-project-title {
      font-size: 40px;
      font-weight: 700;
      margin-bottom: 30px;
      margin-top: 30px;
    }
    .team-project-img-wrapper {
      display: flex;
      /* width: 100%; */
      .team-project-img {
        width: auto;
        height: auto;
        max-width: 500px;
        max-height: 600px;
        margin-right: 20px;
        @media (max-width: 1120px) {
          max-width: 400px;
          max-height: 500px;
        }
        @media (max-width: 820px) {
          max-width: 300px;
          max-height: 400px;
        }
        @media (max-width: 720px) {
          max-width: 250px;
          max-height: 350px;
        }
      }
    }
    .team-project-borderBox {
      margin-top: 4px;
      margin-bottom: 4px;
      border: 1px solid rgba(55, 53, 47, 0.16);
      border-radius: 3px;
      display: flex;
      overflow: hidden;
      justify-content: space-between;
      :hover {
        background-color: #eeeeee;
      }
      cursor: pointer;
      .team-project-borderbox-info {
        flex: 4 1 180px;
        padding: 12px 14px 14px;
        overflow: hidden;
        text-align: left;
        .team-project-borderbox-title {
          font-size: 14px;
          line-height: 20px;
          color: rgb(55, 53, 47);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          min-height: 24px;
          margin-bottom: 2px;
        }
        .team-project-borderbox-text {
          font-size: 12px;
          line-height: 16px;
          color: rgba(55, 53, 47, 0.6);
          height: 32px;
          overflow: hidden;
        }
      }
    }
    .team-project-website-wrapper {
      width: 95%;
    }
    .team-project-content-wrapper {
      width: 95%;
      .team-project-content {
        width: auto;
        max-width: 800px;
        font-size: 0.9em;
      }
    }
    .team-project-Category-title {
      font-weight: 600;
      font-size: 1.25em;
      margin-bottom: 16px;
      margin-top: 20px;
    }
    .team-project-repository-wrapper {
      width: 95%;
    }
    .team-project-stack-wrapper {
      margin-bottom: 40px;
      li {
        margin: 7px;
        font-size: 0.9em;
      }
      ul {
        margin-bottom: 12px;
      }
    }
  }
`;

interface IProps {
  teamIndex: number;
}

const title: NextPage<IProps> = ({ teamIndex }) => {
  const data = TeamProjectData;
  const existImg = () => {
    const condition = data[teamIndex].img.toString().length;
    if (condition === 0) {
      return false;
    } else {
      return true;
    }
  };
  const existWebsite = () => {
    const condition = data[teamIndex].website.url.toString().length;
    if (condition === 0) {
      return false;
    } else {
      return true;
    }
  };

  const existRepository = () => {
    const condition = data[teamIndex].repository.title.toString().length;
    if (condition === 0) {
      return false;
    } else {
      return true;
    }
  };
  return (
    <Container>
      <div className="team-projcet-Wrapper">
        <div className="team-project-title">{data[teamIndex].title}</div>
        {existImg() && (
          <div className="team-project-img-wrapper">
            {data[teamIndex].img.map((image, index) => (
              <img
                className="team-project-img"
                key={index}
                src={image}
                alt=""
              />
            ))}
          </div>
        )}
        {existWebsite() && (
          <div className="team-project-website-wrapper">
            <div className="team-project-Category-title">🌎 Website</div>
            <div
              role="button"
              onClick={() => window.open(data[teamIndex].website.url)}
              className="team-project-borderBox"
            >
              <div className="team-project-borderbox-info">
                <div className="team-project-borderbox-title">
                  {data[teamIndex].website.title}
                </div>
                <div className="team-project-borderbox-text">
                  {data[teamIndex].website.text}
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="team-project-content-wrapper">
          <div className="team-project-Category-title">📃 Content</div>
          <div className="team-project-content">{data[teamIndex].context}</div>
        </div>
        {existRepository() && (
          <div className="team-project-repository-wrapper">
            <div className="team-project-Category-title">🐙 GitHub</div>
            <div
              role="button"
              onClick={() =>
                window.open(
                  `https://github.com/${data[teamIndex].repository.title}`
                )
              }
              className="team-project-borderBox"
            >
              <div className="team-project-borderbox-info">
                <div className="team-project-borderbox-title">
                  {data[teamIndex].repository.title}
                </div>
                <div className="team-project-borderbox-text">
                  {data[teamIndex].repository.text}
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="team-project-stack-wrapper">
          <div className="team-project-Category-title">📚 Stack</div>
          <ul>
            {data[teamIndex].stack.map((stack, index) => (
              <li key={index}>
                <span>{stack}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
};

title.getInitialProps = async ({ query }) => {
  const { title } = query;
  const data = await TeamProjectData.findIndex(
    (index) => index.title === `${title}`
  );
  return { teamIndex: data };
};

export default title;
