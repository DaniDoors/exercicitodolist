import { useEffect, useState } from "react";
import { AfegirTodo } from "./AfegirTodo";
import {
  requestAddTodo,
  requestUpdateTodo,
  requestTodos,
  requestEditTodo,
  requestDeleteTodo,
  replaceTodos,
} from "../redux/actions";
import { TodoList } from "./TodoList";
import { useDispatch, useSelector } from "react-redux";
import { selectTodos } from "../redux/selectors";
import { ButonsFiltre } from "./ButonsFiltre";

export function Todos() {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();
  const [filtre, setFiltre] = useState("All");

  useEffect(() => {
    const intervalID = setInterval(() => loadTodos(), 60000);
    return () => clearInterval(intervalID);
  }, []);

  const loadTodos = () => dispatch(requestTodos());
  const onAddTodo = (todo) => dispatch(requestAddTodo(todo));
  const onEditTodo = (todo) => dispatch(requestEditTodo(todo));
  const onTodoUpdate = (todo) => dispatch(requestUpdateTodo(todo));
  const onTodoDelete = (todo) => dispatch(requestDeleteTodo(todo));
  const onFiltre = (filtre) =>
    dispatch(replaceTodos(filtrat(setFiltre, filtre, todos)));

  return (
    <div className="App">
      <h1>Llistat de TODOs</h1>
      <button onClick={loadTodos}>Refresh</button>
      <ButonsFiltre onFiltre={onFiltre} filtre={filtre} />
      <TodoList
        todos={todos} //todosFiltrat
        onEditTodo={onEditTodo}
        onTodoUpdate={onTodoUpdate}
        onTodoDelete={onTodoDelete}
      />
      <AfegirTodo onAddTodo={onAddTodo} />
    </div>
  );
}
function filtrat(setFiltre, filtre, todos) {
  console.log(filtre);
  setFiltre(filtre);
  if (filtre === "All") return todos;
  if (filtre === "Done") {
    return todos.filter((t) => t.completed);
  }
  if (filtre === "Pending") {
    return todos.filter((t) => !t.completed);
  }
}
