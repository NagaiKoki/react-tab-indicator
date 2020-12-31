import React from "react";

type Props = {
  text: string;
  onClick: () => void;
};

export const TabItem: React.FC<Props> = (props) => {
  const { text, onClick } = props;
  return <li onClick={onClick}>{text}</li>;
};
