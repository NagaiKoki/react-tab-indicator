import React from "react";
import styled from "styled-components";

type Props = {
  text: string;
  onClick: () => void;
};

export const TabItem: React.FC<Props> = (props) => {
  const { text, onClick } = props;
  return <Item onClick={onClick}>{text}</Item>;
};

const Item = styled.li`
  list-style: none;
`;
