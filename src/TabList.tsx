import React, { useState, CSSProperties, useRef, useCallback } from "react";
import styled from "styled-components";
import { TabItem } from "./TabItem";
import { TabIndicator } from "./Indicator";

type Props = {
  items: string[];
  borderStyles?: CSSProperties;
};

export const TabList: React.FC<Props> = (props) => {
  const { items, borderStyles } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const itemRef = useRef(new Array());

  const handleSelectItem = useCallback((index: number) => {
    setSelectedIndex(index);
  }, []);

  const handleGetRef = (element: HTMLLIElement | null) => {
    itemRef.current.push(element);
  };

  const tabItems = items.map((item, i) => {
    return (
      <Wrapper key={i} ref={handleGetRef}>
        <TabItem
          index={i}
          text={item}
          selectedIndex={selectedIndex}
          borderStyles={borderStyles}
          onSelect={handleSelectItem}
        />
      </Wrapper>
    );
  });
  return <Container>{tabItems}</Container>;
};

const Container = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
`;

const Wrapper = styled.li`
  list-style: none;
`;
