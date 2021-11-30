import React from "react";
// import { storiesOf } from "@storybook/react";

import { HelloWorld } from "../components/HelloWorld";
// import { HelloSASS } from "../components/HelloSASS";

// const stories = storiesOf("App test", module);

// stories.add("Hello world", () => <HelloWorld />);
// stories.add("Hello scss", () => <HelloSASS />);

export default {
  title: "HelloWorld",
};

export const World = () => <HelloWorld />;
