import React from "react";
import styled from "styled-components";

type Props = {
  transformX: number;
  width: number;
  borderColor?: string;
  borderHeight?: number;
  transformSpeed?: number;
};

export const TabIndicator: React.FC<Props> = ({
  transformX,
  width,
  borderColor = "green",
  borderHeight = 3,
  transformSpeed = 300,
}) => {
  return (
    <IndicatorBar
      transformX={transformX}
      width={width}
      borderColor={borderColor}
      borderHeight={borderHeight}
      transformSpeed={transformSpeed}
    />
  );
};

const IndicatorBar = styled.div<{
  transformX: number;
  width: number;
  borderColor: string;
  borderHeight: number;
  transformSpeed: number;
}>`
  height: ${(props) => `${props.borderHeight}px`};
  width: ${(props) => `${props.width}px`};
  background: ${(props) => props.borderColor};
  transition: ${(props) => `all ${props.transformSpeed}ms 0s ease`};
  transform: ${(props) => `translateX(${props.transformX}px)`};
`;
