export function TodoListItem({ children, isComplete }) {
  return (
    <div>
      <input type="checkbox" defaultChecked="isComplete" />
      {children}
    </div>
  );
}
