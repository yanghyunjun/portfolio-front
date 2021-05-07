import React from "react";
import styled from "styled-components";
import { CareerData } from "../../data";
import Link from "next/link";

const Container = styled.div`
  li {
    margin: 7px;
    font-size: 0.9em;
  }
  .Main-Career-title {
    font-size: 1.2em;
    font-weight: 500;
    color: black;
  }
  .Main-Career-font-wrapper {
    color: black;
    .Main-Career-font {
      margin-right: 5px;
    }
  }
`;

const Career: React.FC = () => {
  return (
    <Container>
      <div className="Main-Career-title">🏢 Career</div>
      <ul>
        {CareerData.map((career, index) => (
          <div key={index}>
            <Link href="career/[title]" as={`career/${career.title}`}>
              <a className="Main-Career-font-wrapper">
                <li>
                  <span className="Main-Career-font">
                    {career.title} ({career.date})
                  </span>
                </li>
              </a>
            </Link>
          </div>
        ))}
      </ul>
    </Container>
  );
};

export default Career;
