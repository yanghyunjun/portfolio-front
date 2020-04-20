import React from "react";
import styled from "styled-components";
import { GitType } from "../../types/git";

const Container = styled.div`
  .Main-github-title {
    font-size: 0.9em;
    font-weight: 600;
    color: black;
    text-decoration: underline;
    cursor: pointer;
    /* width: 300px; */
  }
  .Main-github-borderBox {
    width: 100%;
    max-width: 1324px;
    margin-top: 4px;
    margin-bottom: 4px;
    border: 1px solid rgba(55, 53, 47, 0.16);
    border-radius: 3px;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    justify-content: space-between;
    :hover {
      background-color: #eeeeee;
    }
    cursor: pointer;
    .Main-github-info {
      flex: 4 1 180px;
      padding: 12px 14px 14px;
      overflow: hidden;
      text-align: left;
      .Main-github-info-username {
        font-size: 14px;
        line-height: 20px;
        color: rgb(55, 53, 47);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        min-height: 24px;
        margin-bottom: 2px;
      }
      .Main-github-info-bio {
        font-size: 12px;
        line-height: 16px;
        color: rgba(55, 53, 47, 0.6);
        height: 32px;
        overflow: hidden;
      }
      .Main-github-info-url-wrapper {
        display: flex;
        margin-top: 6px;
        .Main-github-info-url-gitmark {
          width: 16px;
          height: 16px;
          min-width: 16px;
          margin-right: 6px;
        }
        .Main-github-info-url {
          font-size: 12px;
          line-height: 16px;
          color: rgb(55, 53, 47);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
    .Main-github-avatar-wrapper {
      height: 109px;
      .Main-github-avatar {
        object-fit: cover;
        border-radius: 0px;
        opacity: 1;
        object-position: center 50%;
        @media (max-width: 598px) {
          display: none;
        }
      }
    }
  }
`;

interface IProps {
  gitData: GitType;
}

const Github: React.FC<IProps> = ({ gitData }) => {
  return (
    <Container>
      <div>
        <a
          className="Main-github-title"
          onClick={() => window.open("https://github.com/yanghyunjun")}
        >
          🐙 Github
        </a>
      </div>
      <div
        role="button"
        onClick={() => window.open("https://github.com/yanghyunjun")}
        className="Main-github-borderBox"
      >
        <div className="Main-github-info">
          <div className="Main-github-info-username">
            {gitData.login} - Overview
          </div>
          <div className="Main-github-info-bio">{gitData.bio}</div>
          <div className="Main-github-info-url-wrapper">
            <img
              className="Main-github-info-url-gitmark"
              src="/static/image/GitHub-Mark-32px.png"
            />
            <div className="Main-github-info-url">{gitData.url}</div>
          </div>
        </div>
        <div className="Main-github-avatar-wrapper">
          <img
            className="Main-github-avatar"
            src={gitData.avatar_url}
            alt="yanghyunjun"
          />
        </div>
      </div>
    </Container>
  );
};

export default Github;
