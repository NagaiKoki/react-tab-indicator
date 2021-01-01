import React, { CSSProperties } from "react";
import styled from "styled-components";

type Props = {
  text: string;
  index: number;
  selectedIndex: number;
  borderStyles?: CSSProperties;
  onSelect: (index: number) => void;
};

export const TabItem: React.FC<Props> = (props) => {
  const { text, index, selectedIndex, borderStyles, onSelect } = props;
  const isSelected = index === selectedIndex;

  return (
    <Item
      onClick={() => onSelect(index)}
      isSelected={isSelected}
      style={isSelected ? borderStyles : undefined}
    >
      {text}
    </Item>
  );
};

const Item = styled.li<{ isSelected: boolean }>`
  padding: 5px 10px;
  list-style: none;
  cursor: pointer;
`;
