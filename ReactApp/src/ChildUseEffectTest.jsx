import { useEffect, useState } from "react";

export function Child() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  //   useEffect(() => {
  //     console.log("Age is changed", age);
  //   }),
  //     [age];

  useEffect(() => {
    const handler = () => {
      console.log(name);
    };
    document.addEventListener("click", handler);
    return () => {
      document.removeEventListener("click", handler);
    };
  }, [name]);

  return (
    <div>
      <button onClick={() => setAge((currentAge) => currentAge + 1)}>
        {age}
      </button>
      <br />
      <br />
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      <br />
      My Name is {name}
    </div>
  );
}
