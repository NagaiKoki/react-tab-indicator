import React from "react";
declare type Props = {
    items: string[];
    borderColor?: string;
    borderHeight?: number;
    transformSpeed?: number;
    onClick: (index: number) => void;
};
export declare const TabList: React.FC<Props>;
export {};
