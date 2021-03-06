import React from "react";
import styled from "styled-components";
import TabIndicator from "react-tab-indicator";
import { mockItems, borderStyles } from "./mockData";
import "./styles.css";

export const App = () => {
  const { borderColor, borderHeight, transformSpeed } = borderStyles;

  const handleOnClick = (index: number) => {
    console.log(mockItems[index]);
  };

  return (
    <Container>
      <Title>react-tab-indicator</Title>
      <TabWrapper>
        <TabIndicator
          items={mockItems}
          borderColor={borderColor}
          borderHeight={borderHeight}
          transformSpeed={transformSpeed}
          onClick={handleOnClick}
        />
      </TabWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #faebd7;
`;

const Title = styled.h1`
  padding-top: 100px;
  color: #202020;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
`;

const TabWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;
