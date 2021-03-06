import React from "react";
import styled from "styled-components";

type Props = {
  index: number;
  text: string;
  selectedIndex: number;
  onSelect: (index: number) => void;
};

export const TabItem: React.FC<Props> = React.memo(
  ({ text, index, selectedIndex, onSelect }) => {
    const isSelected = index === selectedIndex;

    return (
      <Item onClick={() => onSelect(index)} isSelected={isSelected}>
        {text}
      </Item>
    );
  }
);

const Item = styled.button<{ isSelected: boolean }>`
  margin-bottom: 5px;
  padding: 5px 10px;
  background: none;
  border: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;
