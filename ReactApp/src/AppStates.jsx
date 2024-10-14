import { useState } from "react";

const INITIAL_ARRAY = ["A", "B", "C"];

function AppStates() {
  const [array, setArray] = useState(INITIAL_ARRAY);
  const [value, setValue] = useState("");

  function removeElement() {
    setArray((currentArray) => {
      return currentArray.slice(1);
    });
  }
  function removeAllBs(letter) {
    setArray((currentArray) => {
      return currentArray.filter((element) => element !== letter);
    });
  }

  function addElmtToStart(letter) {
    setArray((currentArray) => {
      return [letter, ...currentArray];
    });
  }

  function addElmtToEnd(letter) {
    setArray((currentArray) => {
      return [...currentArray, letter];
    });
  }

  function updateAtoH(letter) {
    setArray((currentArray) => {
      return currentArray.map((element) => {
        if (element === "A") return "H";
        return element;
      });
    });
  }

  function clear(letter) {
    setArray([]);
  }

  function reset(letter) {
    setArray(INITIAL_ARRAY);
  }

  function addLetterToIndex(letter, index) {
    setArray((currentArray) => {
      return [
        ...currentArray.slice(0, index),
        letter,
        ...currentArray.slice(index),
      ];
    });
  }
  return (
    <div>
      <button onClick={removeElement}>Remove the first element</button>
      <br />
      <br />

      <button onClick={() => removeAllBs("B")}>Remove the All Bs</button>
      <br />
      <br />

      <button onClick={() => addElmtToStart("B")}>Add Element to Start</button>
      <br />
      <br />

      <button onClick={() => addElmtToEnd("Z")}>Add Element to End</button>
      <br />
      <br />

      <button onClick={reset}>Reset</button>
      <br />
      <br />

      <button onClick={clear}>Clear</button>
      <br />
      <br />

      <button onClick={() => updateAtoH("H")}>Update All A to H</button>
      <br />
      <br />

      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => addElmtToStart(value)}>Add Value to Start</button>
      <br />
      <br />

      <button onClick={() => addLetterToIndex("C", 2)}>Add Letter to 2</button>
      <br />
      <br />

      {array.join(",")}
    </div>
  );
}

export default App;
