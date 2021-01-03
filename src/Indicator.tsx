import React from "react";
import styled from "styled-components";

type Props = {
  transformX: number;
  width: number;
};

export const TabIndicator: React.FC<Props> = (props) => {
  const { transformX, width } = props;

  return <IndicatorBar transformX={transformX} width={width} />;
};

const IndicatorBar = styled.div<{ transformX: number; width: number }>`
  height: 3px;
  width: ${(props) => `${props.width}px`};
  background: red;
  transition: all 300ms 0s ease;
  transform: ${(props) => `translateX(${props.transformX}px)`};
`;
