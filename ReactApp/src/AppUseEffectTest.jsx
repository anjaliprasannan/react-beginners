import { useState } from "react";
import { Child } from "./Child";
import { ClassComponent } from "./ClassComponent";
import { FunctionComponent } from "./FunctionComponent";

export default function App() {
  //   return <FunctionComponent />;
  //   return <ClassComponent />;
  //   const [age, setAge] = useState(0);

  const [isShown, setIsShown] = useState(true);

  const childComponent = isShown ? <Child /> : null;

  return (
    <div>
      <button onClick={() => setIsShown((s) => !s)}>Show/Hide</button>
      <br />
      <br />
      {childComponent}
    </div>
  );
}
