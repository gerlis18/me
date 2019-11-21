import React from "react";
import styled, { keyframes } from "styled-components";

const ProgressBar = (props) => {
  if (!props.percent) {
    return null;
  }

  const Container = styled.div`
    height: 4px;
    width: 200px;
    background: lightgray;
  `;

  const loading = keyframes`
    0% {
        transform: scaleX(0);
    }
    to {
      transform: scaleX(${props.percent});
    }
`;

  const Loaded = styled.div`
    height: 100%;
    width: 100%;
    background: #444;
    animation: 3s linear forwards ${loading};
    transform-origin: 0;
  `;

  return (
    <Container>
      <Loaded />
    </Container>
  );
};

export default ProgressBar;
