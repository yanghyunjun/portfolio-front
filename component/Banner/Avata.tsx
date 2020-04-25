import React, { useState } from "react";
import styled from "styled-components";
import OutsideClickHandler from "react-outside-click-handler";

const Container = styled.div`
  position: absolute;
  z-index: 10;
  margin-left: 105px;
  margin-top: 195px;
  display: flex;
  @media (max-width: 420px) {
    margin-left: 75px;
  }
  @media (max-width: 320px) {
    margin-top: 155px;
  }
  .avata-thumbnail {
    width: 110px;
    height: 110px;
    cursor: pointer;
  }
  .avata-thumbnail-expansion {
    margin-left: -110px;
    width: 220px;
    height: 220px;
  }
`;

const Avata: React.FC = () => {
  const [show, setShow] = useState(false);
  const PopupImg = () => {
    setShow(!show);
  };
  return (
    <Container>
      <div role="button" onClick={PopupImg}>
        <img
          className="avata-thumbnail"
          src="/static/image/thumbnail.png"
          alt=""
        />
      </div>
      <OutsideClickHandler
        onOutsideClick={() => {
          if (show) {
            setShow(false);
          }
        }}
      >
        {show && (
          <img
            className="avata-thumbnail-expansion"
            src="/static/image/thumbnail.png"
            alt=""
          />
        )}
      </OutsideClickHandler>
    </Container>
  );
};

export default Avata;
