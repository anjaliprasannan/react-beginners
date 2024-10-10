export function MyName(props) {
  return (
    <div>
      <label>From Name</label>
      <h1>Anjali Prasannan</h1>

      <label>From Props</label>
      <h2>{props.name}</h2>
      <h3>{props.age}</h3>
    </div>
  );
}
