import React from "react";
import styled from "styled-components";

const Img = styled.img`
  margin-left: 105px;
  margin-top: 195px;
  width: 110px;
  height: 110px;
  position: absolute;
  z-index: 10;
`;

const Avata: React.FC = () => {
  return <Img src="/static/image/thumbnail.png" alt="" />;
};

export default Avata;
