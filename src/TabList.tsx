import React from "react";
import styled from "styled-components";
import { TabItem } from "./TabItem";

type Props = {
  items: string[];
};

export const TabList: React.FC<Props> = (props) => {
  const { items } = props;

  const tabItems = items.map((item, i) => {
    return <TabItem key={i} text={item} onClick={() => {}} />;
  });
  return <Wrapper>{tabItems}</Wrapper>;
};

const Wrapper = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
`;
