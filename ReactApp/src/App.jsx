import { useState } from "react";
import { Counter } from "./Counter";
import { CounterClass } from "./CounterClass";

function App() {
  // const [name, setName] = useState("Anjali");
  // const [age, setAge] = useState(31);
  const [person, setPerson] = useState({ name: "Anjali", age: 31 });

  function handleClick() {
    // setName("Prasannan");

    // // to increment age by 2 add the function method instead age + 1
    // setAge((currentAge) => {
    //   return currentAge + 1;
    // });
    // setAge((currentAge) => {
    //   return currentAge + 1;
    // });

    setPerson((currentPerson) => {
      return { ...currentPerson, name: "Prasannan" };
    });
  }
  return (
    // <h1 onClick={handleClick}>
    //   Hi {person.name} {person.age}
    // </h1>
    <div>
      <input
        type="text"
        value={person.name}
        onChange={(e) => setPerson(e.target.value)}
      />
    </div>

    // <CounterClass></CounterClass>
  );
}

export default App;
