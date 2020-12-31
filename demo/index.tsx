import React from "react";
import ReactDOM from "react-dom";
import { mockData } from "./mockData";
import { TabList } from "../src/TabList";

ReactDOM.render(
  <TabList items={mockData.items} />,
  document.getElementById("root")
);
