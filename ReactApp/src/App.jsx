import { useState } from "react";
import { Child } from "./Child";
import { FetchingApi } from "./FetchingApi";

export default function App() {
  const [show, setShow] = useState(true);

  const childComponent = show ? <Child /> : null;

  return (
    <div>
      {/* <button onClick={() => setShow((currentShow) => !currentShow)}>
        Show/Hide
      </button>
      {childComponent} */}
      <FetchingApi />
    </div>
  );
}
