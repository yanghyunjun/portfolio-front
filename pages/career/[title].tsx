import React from "react";
import styled from "styled-components";
import { NextPage } from "next";
import { CareerData } from "../../data";
import Banner from "../../component/Banner/Banner";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .career-wrapper {
    width: auto;
    max-width: 900px;
    @media (max-width: 900px) {
      padding: 0 20px 0 20px;
    }
    .career-title-wrapper {
      .career-title {
        font-size: 1.3em;
        font-weight: 600;
      }
    }
    .career-date-wrapper {
      .career-date {
        font-size: 1.3em;
        font-weight: 600;
      }
    }
    .career-content-wrapper {
      .career-content {
        font-size: 1.3em;
        font-weight: 400;
      }
    }
    .career-experience-wrapper {
      margin-bottom: 30px;
      .career-experience {
        font-size: 1em;
        font-weight: 400;
      }
    }
  }
  .career-category {
    font-size: 1.8em;
    font-weight: 700;
    margin-bottom: 30px;
    margin-top: 30px;
  }
`;

interface IProps {
  careerIndex: number;
}
const title: NextPage<IProps> = ({ careerIndex }) => {
  const data = CareerData;


  return (
    <Container>
      <Banner avata="none" />
      <div className="career-wrapper">
        <div className="career-title-wrapper">
          <div className="career-category">🗺️ 프로젝트 명</div>
          <div className="career-title">{data[careerIndex].title}</div>
        </div>
        <div className="career-date-wrapper">
          <div className="career-category">⏰ 프로젝트 기간</div>
          <div className="career-date">{data[careerIndex].date}</div>
        </div>
        <div className="career-content-wrapper">
          <div className="career-category">✒️ 프로젝트 내용</div>
          <div className="career-content" dangerouslySetInnerHTML={ {__html: data[careerIndex].content.replace(/\n/g, "<br/>")} }></div>
        </div>
        <div className="career-experience-wrapper">
          <div className="career-category">😄 프로젝트 진행 후 느낀점</div>
          <div className="career-experience" dangerouslySetInnerHTML={ {__html: data[careerIndex].experience.replace(/\n/g, "<br/>")} }></div>
        </div>
      </div>
    </Container>
  );
};

title.getInitialProps = async ({ query }) => {
  const { title } = query;
  const data = await CareerData.findIndex(
    (index) => index.title === `${title}`
  );
  return { careerIndex: data };
};
export default title;
