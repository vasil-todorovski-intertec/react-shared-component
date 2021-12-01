import React from "react";
// import { storiesOf } from "@storybook/react";

import { HelloWorld as HW } from "../components/HelloWorld";
// import { HelloSASS } from "../components/HelloSASS";

// const stories = storiesOf("App test", module);

// stories.add("Hello world", () => <HelloWorld />);
// stories.add("Hello scss", () => <HelloSASS />);

export default {
  title: "App test",
};

export const HelloWorld = () => <HW />;
