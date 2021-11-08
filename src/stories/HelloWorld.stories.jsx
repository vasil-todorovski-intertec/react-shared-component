import React from "react";
import { storiesOf } from "@storybook/react";

import { HelloWorld } from "../components/HelloWorld";

const stories = storiesOf("App test", module);

stories.add("App", () => <HelloWorld />);
