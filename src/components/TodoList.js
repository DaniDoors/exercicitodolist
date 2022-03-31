import { TodoItem } from "./TodoItem";

export function TodoList({ todos, onTodoUpdate, onTodoDelete, onEditTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onEditTodo={onEditTodo}
          onTodoUpdate={onTodoUpdate}
          onTodoDelete={onTodoDelete}
        />
      ))}
    </ul>
  );
}
