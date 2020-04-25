import React from "react";
import styled from "styled-components";
import { NextPage } from "next";
import { ActivitysData } from "../../data";
import Banner from "../../component/Banner/Banner";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .activity-wrapper {
    width: auto;
    max-width: 900px;
    @media (max-width: 900px) {
      padding: 0 20px 0 20px;
    }
    .activity-title-wrapper {
      .activity-title {
        font-size: 1.3em;
        font-weight: 600;
      }
    }
    .activity-date-wrapper {
      .activity-date {
        font-size: 1.3em;
        font-weight: 600;
      }
    }
    .activity-content-wrapper {
      .activity-content {
        font-size: 1.3em;
        font-weight: 400;
      }
    }
    .activity-experience-wrapper {
      margin-bottom: 30px;
      .activity-experience {
        font-size: 1em;
        font-weight: 400;
      }
    }
  }
  .activity-category {
    font-size: 1.8em;
    font-weight: 700;
    margin-bottom: 30px;
    margin-top: 30px;
  }
`;

interface IProps {
  activityIndex: number;
}
const title: NextPage<IProps> = ({ activityIndex }) => {
  const data = ActivitysData;
  return (
    <Container>
      <Banner avata="none" />
      <div className="activity-wrapper">
        <div className="activity-title-wrapper">
          <div className="activity-category">🗺️ 활동 명</div>
          <div className="activity-title">{data[activityIndex].title}</div>
        </div>
        <div className="activity-date-wrapper">
          <div className="activity-category">⏰ 활동 기간</div>
          <div className="activity-date">{data[activityIndex].date}</div>
        </div>
        <div className="activity-content-wrapper">
          <div className="activity-category">✒️ 활동 내용</div>
          <div className="activity-content">{data[activityIndex].content}</div>
        </div>
        <div className="activity-experience-wrapper">
          <div className="activity-category">😄 느낀점</div>
          <div className="activity-experience">
            {data[activityIndex].experience}
          </div>
        </div>
      </div>
    </Container>
  );
};

title.getInitialProps = async ({ query }) => {
  const { title } = query;
  const data = await ActivitysData.findIndex(
    (index) => index.title === `${title}`
  );
  return { activityIndex: data };
};
export default title;
