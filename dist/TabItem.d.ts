import React from "react";
declare type Props = {
    text: string;
    index: number;
    selectedIndex: number;
    onSelect: (index: number) => void;
};
export declare const TabItem: React.FC<Props>;
export {};
