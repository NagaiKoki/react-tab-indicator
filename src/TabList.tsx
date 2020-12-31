import React from "react";
import { TabItem } from "./TabItem";

type Props = {
  items: string[];
};

export const TabList: React.FC<Props> = (props) => {
  const { items } = props;

  const tabItems = items.map((item, i) => {
    return <TabItem key={i} text={item} onClick={() => {}} />;
  });
  return <ul>{tabItems}</ul>;
};
