import { useRef } from "react";

export function TodoItem({ todo, onTodoUpdate, onTodoDelete, onEditTodo }) {
  let detallsVisibles = true;
  const titleRef = useRef();
  const detailsRef = useRef();
  return (
    <>
      <li
        onClick={() => {
          console.log(todo);
          detallsVisibles = !detallsVisibles;
          console.log(detallsVisibles);
        }}
      >
        {todo.title}
      </li>
      <button
        className={todo.completed ? "completed" : "pending"}
        onClick={() => onTodoUpdate({ ...todo, completed: !todo.completed })}
      >
        OK
      </button>
      <button onClick={() => onTodoDelete({ ...todo })}>Delete</button>
      <div
        className={detallsVisibles ? "detallsVisibles" : "detallsNoVisibles"}
      >
        {todo.details}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const title = titleRef.current.value;
            const details = detailsRef.current.value;
            const id = todo.id;
            titleRef.current.value = "";
            detailsRef.current.value = "";
            onEditTodo({ id, title, details });
          }}
        >
          <input ref={titleRef} defaultValue={todo.title} />
          <input ref={detailsRef} defaultValue={todo.details} />
          <input type="submit" value="Modificar" />
        </form>
      </div>
    </>
  );
}
