import { useRef } from "react";

export function AfegirTodo({ onAddTodo }) {
  const titleRef = useRef();
  const detailsRef = useRef();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const title = titleRef.current.value;
        const details = detailsRef.current.value;
        titleRef.current.value = "";
        detailsRef.current.value = "";
        onAddTodo({ title, details });
      }}
    >
      <input ref={titleRef} />
      <input ref={detailsRef} />
      <input type="submit" value="Afegir" />
    </form>
  );
}
