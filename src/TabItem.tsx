import React, { CSSProperties } from "react";
import styled from "styled-components";

type Props = {
  text: string;
  index: number;
  selectedIndex: number;
  onSelect: (index: number) => void;
};

export const TabItem: React.FC<Props> = React.memo((props) => {
  const { text, index, selectedIndex, onSelect } = props;
  const isSelected = index === selectedIndex;

  return (
    <Item onClick={() => onSelect(index)} isSelected={isSelected}>
      {text}
    </Item>
  );
});

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
