import React from "react";
import Value from "./Value";
import Temp from "./Temp";
import Adder from "./Adder";
import Timer from "./Timer";
import { useState } from "react";

const ReactComponents = () => {
  const [value, setValue] = React.useState(0);
  return (
    <div>
      <Value name="Counter" value={value} setValue={setValue} />
      <Temp />
      <Adder />
      <Timer />
    </div>
  );
};
export default ReactComponents;
