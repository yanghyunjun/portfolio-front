import React from "react";
import styled from "styled-components";
import { NextPage } from "next";
import { PersonalProjectData } from "../../../data";

const Container = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 820px) {
    justify-content: flex-start;
    margin-left: 50px;
  }
  @media (max-width: 415px) {
    margin-left: 30px;
  }
  .personal-projcet-Wrapper {
    display: flex;
    flex-direction: column;
    .personal-project-title {
      font-size: 1.8em;
      font-weight: 700;
      margin-bottom: 30px;
      margin-top: 30px;
    }
    .personal-project-img-wrapper {
      display: flex;
      .personal-project-img {
        width: auto;
        height: auto;
        max-width: 600px;
        max-height: 700px;
        margin-right: 20px;
        @media (max-width: 1120px) {
          max-width: 500px;
          max-height: 600px;
        }
        @media (max-width: 820px) {
          max-width: 400px;
          max-height: 500px;
        }
        @media (max-width: 720px) {
          max-width: 350px;
          max-height: 450px;
        }
      }
    }
    .personal-project-borderBox {
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
      .personal-project-borderbox-info {
        flex: 4 1 180px;
        padding: 12px 14px 14px;
        overflow: hidden;
        text-align: left;
        .personal-project-borderbox-title {
          font-size: 14px;
          line-height: 20px;
          color: rgb(55, 53, 47);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          min-height: 24px;
          margin-bottom: 2px;
        }
        .personal-project-borderbox-text {
          font-size: 12px;
          line-height: 16px;
          color: rgba(55, 53, 47, 0.6);
          height: 32px;
          overflow: hidden;
        }
      }
    }
    .personal-project-website-wrapper {
      width: calc(100% - 20px);
    }
    .personal-project-content-wrapper {
      word-break: normal;
      white-space: normal;
      max-width: 600px;
      @media (max-width: 720px) {
        width: calc(100% - 20px);
      }
      .personal-project-content {
        width: auto;
        font-size: 0.9em;
      }
    }
    .personal-project-Category-title {
      font-weight: 600;
      font-size: 1.25em;
      margin-bottom: 16px;
      margin-top: 20px;
    }
    .personal-project-repository-wrapper {
      width: calc(100% - 20px);
    }
    .personal-project-stack-wrapper {
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
  personalIndex: number;
}

const title: NextPage<IProps> = ({ personalIndex }) => {
  const data = PersonalProjectData;
  const existImg = () => {
    const condition = data[personalIndex].img.toString().length;
    if (condition === 0) {
      return false;
    } else {
      return true;
    }
  };
  const existWebsite = () => {
    const condition = data[personalIndex].website.url.toString().length;
    if (condition === 0) {
      return false;
    } else {
      return true;
    }
  };

  const existRepository = () => {
    const condition = data[personalIndex].repository.title.toString().length;
    if (condition === 0) {
      return false;
    } else {
      return true;
    }
  };
  return (
    <Container>
      <div className="personal-projcet-Wrapper">
        <div className="personal-project-title">
          {data[personalIndex].title}
        </div>
        {existImg() && (
          <div className="personal-project-img-wrapper">
            {data[personalIndex].img.map((image, index) => (
              <img
                className="personal-project-img"
                key={index}
                src={image}
                alt=""
              />
            ))}
          </div>
        )}
        {existWebsite() && (
          <div className="personal-project-website-wrapper">
            <div className="personal-project-Category-title">🌎 Website</div>
            <div
              role="button"
              onClick={() => window.open(data[personalIndex].website.url)}
              className="personal-project-borderBox"
            >
              <div className="personal-project-borderbox-info">
                <div className="personal-project-borderbox-title">
                  {data[personalIndex].website.title}
                </div>
                <div className="personal-project-borderbox-text">
                  {data[personalIndex].website.text}
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="personal-project-content-wrapper">
          <div className="personal-project-Category-title">📃 Content</div>
          <div className="personal-project-content">
            {data[personalIndex].context}
          </div>
        </div>
        {existRepository() && (
          <div className="personal-project-repository-wrapper">
            <div className="personal-project-Category-title">🐙 GitHub</div>
            <div
              role="button"
              onClick={() =>
                window.open(
                  `https://github.com/${data[personalIndex].repository.title}`
                )
              }
              className="personal-project-borderBox"
            >
              <div className="personal-project-borderbox-info">
                <div className="personal-project-borderbox-title">
                  {data[personalIndex].repository.title}
                </div>
                <div className="personal-project-borderbox-text">
                  {data[personalIndex].repository.text}
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="personal-project-stack-wrapper">
          <div className="personal-project-Category-title">📚 Stack</div>
          <ul>
            {data[personalIndex].stack.map((stack, index) => (
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
  const data = await PersonalProjectData.findIndex(
    (index) => index.title === `${title}`
  );
  return { personalIndex: data };
};

export default title;
