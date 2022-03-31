import { REPLACE_TODOS, ADD_TODO, UPDATE_TODO } from "../actions";

export const initialState = [];
export function reduceTodos(state = initialState, action) {
  switch (action.type) {
    case REPLACE_TODOS:
      //filtra todos=filtrat
      return action.todos;
    case ADD_TODO:
      return [...state, action.todo];
    case UPDATE_TODO:
      return state.map((currentTodo) =>
        currentTodo.id === action.todo.id ? action.todo : currentTodo
      );
    default:
      return state;
  }
}

// export function reduceFilter(state = initialState, action) {
//   switch (action.type) {
//     case All_VISIBLE:
//       return action.todos;
//     case DONE_VISIBLE:
//       return action.todos.filter((t) => t.completed);
//     case PENDING_VISIBLE:
//       return action.todos.filter((t) => !t.completed);
//     default:
//       return state;
//   }
// }
