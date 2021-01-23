import React from "react";
import styled from "styled-components";

type Props = {
  id: number;
  text: string;
  selectedId: number;
  onSelect: (index: number) => void;
};

export const TabItem: React.FC<Props> = React.memo((props) => {
  const { text, id, selectedId, onSelect } = props;
  const isSelected = id === selectedId;

  return (
    <Item onClick={() => onSelect(id)} isSelected={isSelected}>
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
