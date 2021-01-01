import React from "react";
import styled from "styled-components";
import { mockData } from "./mockData";
import { TabList } from "../src";
import "./styles.css";

export const App = () => {
  return (
    <Container>
      <TabList items={mockData.items} />
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #faebd7;
`;
