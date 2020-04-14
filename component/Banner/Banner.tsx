import React from "react";
import styled from "styled-components";
import { Img } from "../../data";

const Container = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  .banner-background-img {
    width: 100%;
    max-height: 30vh;
    object-fit: cover;
    border-radius: 0px;
    opacity: 1;
    object-position: center 50%;
  }
  .banner-myprofile-img {
    margin-left: 105px;
    margin-top: 195px;
    width: 110px;
    height: 110px;
    position: absolute;
    z-index: 10;
  }
`;

const Banner: React.FC = () => {
  return (
    <Container>
      <img className="banner-background-img" src={Img[0]?.url} alt="" />
      <img
        className="banner-myprofile-img"
        src="/static/image/thumbnail.png"
        alt=""
      />
    </Container>
  );
};

export default Banner;
