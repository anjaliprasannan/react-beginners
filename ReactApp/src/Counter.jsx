import { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter((currentCounter) => {
      return currentCounter + 1;
    });
  }
  return <h1 onClick={increment}>{counter}</h1>;
}
