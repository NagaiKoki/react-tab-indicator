import React, { useState, useRef, useCallback, useEffect } from "react";
import styled from "styled-components";
import { TabItem } from "./TabItem";
import { TabIndicator } from "./Indicator";
import { calcTransformXWidth } from "./utils";

type Props = {
  items: { id: number; value: string }[];
  borderColor?: string;
  borderHeight?: number;
  transformSpeed?: number;
  onClick: (id: number) => void;
};

export const TabList: React.FC<Props> = (props) => {
  const { items, borderColor, borderHeight, transformSpeed, onClick } = props;
  const [selectedId, setSelectedId] = useState(0);
  const [transformXMap, setTransformXMap] = useState<number[]>([]);
  const [widthMap, setWidthMap] = useState<number[]>([]);
  const itemRefs = useRef<HTMLLIElement[]>([]);

  useEffect(() => {
    const widthMap = itemRefs.current.map((item) => item.clientWidth);
    const calcTransformX = calcTransformXWidth(widthMap);
    setWidthMap(widthMap);
    setTransformXMap(calcTransformX);
  }, [itemRefs]);

  const handleSelectItem = useCallback((id: number) => {
    setSelectedId(id);
    onClick(id);
  }, []);

  const tabItems = items.map((item) => {
    const { id, value } = item;
    return (
      <Wrapper
        key={id}
        ref={(ele) => (ele ? (itemRefs.current[id] = ele) : undefined)}
      >
        <TabItem
          id={id}
          text={value}
          selectedId={selectedId}
          onSelect={handleSelectItem}
        />
      </Wrapper>
    );
  });

  return (
    <Container>
      <ListWrapper>{tabItems}</ListWrapper>
      <IndicatorWrapper>
        <TabIndicator
          transformX={transformXMap[selectedId]}
          width={widthMap[selectedId]}
          borderColor={borderColor}
          borderHeight={borderHeight}
          transformSpeed={transformSpeed}
        />
      </IndicatorWrapper>
    </Container>
  );
};

const Container = styled.div``;

const ListWrapper = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
`;

const Wrapper = styled.li`
  list-style: none;
`;

const IndicatorWrapper = styled.div``;
