import React, { useState } from "react";
import styled from "styled-components";
import { ImgData } from "../../data";
import Avata from "./Avata";

const Container = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  .banner-background-img {
    width: 100%;
    max-height: 256px;
    object-fit: cover;
    border-radius: 0px;
    opacity: 1;
    object-position: center 50%;
  }
`;

interface IProps {
  avata: "exit" | "none";
}

const Banner: React.FC<IProps> = ({ avata }) => {
  switch (avata) {
    case "exit":
      return (
        <Container>
          <img className="banner-background-img" src={ImgData[0]?.url} alt="" />
          <Avata />
        </Container>
      );
    case "none":
      return (
        <Container>
          <img className="banner-background-img" src={ImgData[0]?.url} alt="" />
        </Container>
      );
    default:
      return (
        <Container>
          <img className="banner-background-img" src={ImgData[0]?.url} alt="" />
          <Avata />
        </Container>
      );
  }
};

export default Banner;
