import React, {
  useState,
  CSSProperties,
  useRef,
  useCallback,
  useEffect,
} from "react";
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
  const [widthArray, setWidthArray] = useState<number[]>([]);
  const itemRefs = useRef<HTMLLIElement[]>([]);

  useEffect(() => {
    const widthMap = itemRefs.current.map((item) => item.clientWidth);

    setWidthArray(widthMap);
  }, [itemRefs]);

  const handleSelectItem = useCallback((index: number) => {
    setSelectedIndex(index);
  }, []);

  const tabItems = items.map((item, i) => {
    return (
      <Wrapper
        key={i}
        ref={(ele) => (ele ? (itemRefs.current[i] = ele) : undefined)}
      >
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

  return (
    <Container>
      <ListWrapper>{tabItems}</ListWrapper>
      <IndicatorWrapper>
        <TabIndicator transformX={widthArray[selectedIndex]} />
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
