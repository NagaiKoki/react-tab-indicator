import React from "react";
declare type Props = {
    index: number;
    text: string;
    selectedIndex: number;
    onSelect: (index: number) => void;
};
export declare const TabItem: React.FC<Props>;
export {};
