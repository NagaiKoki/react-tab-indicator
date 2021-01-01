import React from "react";
import styled from "styled-components";
import { mockData } from "./mockData";
import { TabList } from "../src";
import "./styles.css";

export const App = () => {
  return (
    <Container>
      <Title>react-tab-indicator</Title>
      <TabWrapper>
        <TabList items={mockData.items} />
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
