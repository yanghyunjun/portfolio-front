import React from "react";
import styled from "styled-components";
import { Img } from "../../data";

const Container = styled.div`
  /* width: 100%;
  height: 30vh; */
  .banner-background-img {
    width: 100%;
    height: 30vh;
    object-fit: cover;
    border-radius: 0px;
    opacity: 1;
    object-position: center 50%;
  }
`;

const Banner: React.FC = () => {
  return (
    <Container>
      <img className="banner-background-img" src={Img[0]?.url} alt="" />
    </Container>
  );
};

export default Banner;
