# react-tab-indicator

[![npm](https://img.shields.io/npm/v/react-tab-indicator.svg)](https://github.com/NagaiKoki/react-tab-indicator)
[![GitHub stars](https://img.shields.io/github/stars/NagaiKoki/react-tab-indicator.svg)](https://github.com/NagaiKoki/react-tab-indicator/stargazers)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

![react-tab-indicator-gif](https://user-images.githubusercontent.com/50698194/105572143-af285400-5d98-11eb-8b37-2ff717d07d97.gif)

### A High performance Tab with Indicator based React component

## Installation

with npm

```shell
npm i react-tab-indicator
```

or with yarn

```shell
yarn add react-tab-indicator
```

## Usage

```jsx
import React from "react";
import ReactTabIndicator from "react-tab-indicator";

<ReactTabIndicator
  items={["Japanese", "English", "Chinese"]}
  borderColor={"yellow"}
  tranfromSpeed={300}
  onClick={handleOnClick}
/>;
```

## Props

| Name             | Type           | Required | Description                      |
| ---------------- | -------------- | -------- | -------------------------------- |
| `items`          | `string Array` | true     | The labels of Tab                |
| `borderColor`    | `string`       | false    | The color of Indicator           |
| `borderHeight`   | `number`       | false    | The height of Indicator          |
| `transformSpeed` | `number`       | false    | The speed of transform Indicator |
| `onClick`        | `Function`     | true     | The funcation when click a Tab   |
