// import { TodoList } from "./TodoList";
import { MyName } from "./MyName";
import { TodoListClass } from "./TodoListClass";
import { MyNameClass } from "./MyNameClass";
import { Children } from "./Children";
import { TodoListItem } from "./TodoListItem";
import { TodoListItemClass } from "./TodoListItemClass";
import { User } from "./User";
import "./style.css";
import user from "./user.json";
import img from "./screenshot.png";

function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <TodoListClass />
      <MyNameClass />
      <MyName name="Anjali Prasannan" age="31" isProgrammer></MyName>
      <Children>
        <span>Child Name</span>
      </Children>
      <TodoListItem>
        <span> Todo Item 1 </span>
      </TodoListItem>
      <TodoListItemClass isComplete={false}>
        Todolist item Class 1
      </TodoListItemClass>
      <User name="Anjali" age="31" />
      <h1>{JSON.stringify(user)}</h1>
      <img src={img} />
    </div>
  );
}

export default App;
