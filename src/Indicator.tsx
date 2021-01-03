import React from "react";
import styled from "styled-components";

type Props = {
  transformX: number;
};

export const TabIndicator: React.FC<Props> = (props) => {
  const { transformX } = props;

  return <IndicatorBar transformX={transformX} />;
};

const IndicatorBar = styled.div<{ transformX: number }>`
  height: 3px;
  width: ${(props) => `${props.transformX}px`};
  background: red;
  transition: all 300ms 0s ease;
  transform: ${(props) => `translateX(${props.transformX}px)`};
`;
