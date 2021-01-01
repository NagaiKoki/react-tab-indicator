import React, { useState, CSSProperties, useCallback } from "react";
import styled from "styled-components";
import { TabItem } from "./TabItem";

type Props = {
  items: string[];
  borderStyles?: CSSProperties;
};

export const TabList: React.FC<Props> = (props) => {
  const { items, borderStyles } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSelectItem = useCallback((index: number) => {
    setSelectedIndex(index);
  }, []);

  const tabItems = items.map((item, i) => {
    return (
      <TabItem
        key={i}
        index={i}
        text={item}
        selectedIndex={selectedIndex}
        borderStyles={borderStyles}
        onSelect={handleSelectItem}
      />
    );
  });
  return <Wrapper>{tabItems}</Wrapper>;
};

const Wrapper = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
`;
