export const REQUEST_TODOS = "todos/REQUEST_TODOS";
export function requestTodos() {
  return { type: REQUEST_TODOS };
}

export const REPLACE_TODOS = "todos/REPLACE_TODOS";
export function replaceTodos(todos) {
  return { type: REPLACE_TODOS, todos: todos };
}

export const REQUEST_ADD_TODO = "todos/REQUEST_ADD_TODO";
export function requestAddTodo(todo) {
  return { type: REQUEST_ADD_TODO, todo };
}

export const ADD_TODO = "todos/ADD_TODO";
export function addTodo(todo) {
  return { type: ADD_TODO, todo };
}

export const REQUEST_UPDATE_TODO = "todos/REQUEST_UPDATE_TODO";
export function requestUpdateTodo(updatedTodo) {
  return { type: REQUEST_UPDATE_TODO, todo: updatedTodo };
}

export const UPDATE_TODO = "todos/UPDATE_TODO";
export function updateTodo(updatedTodo) {
  return { type: UPDATE_TODO, todo: updatedTodo };
}

export const REQUEST_DELETE_TODO = "todos/REQUEST_DELETE_TODO";
export function requestDeleteTodo(todo) {
  return { type: REQUEST_DELETE_TODO, todo: todo };
}
export const DELETE_TODO = "todos/DELETE_TODO";
export function deleteTodo(todo) {
  return { type: DELETE_TODO, todo: todo };
}
export const REQUEST_EDIT_TODO = "todos/REQUEST_EDIT_TODO";
export function requestEditTodo(todo) {
  return { type: REQUEST_EDIT_TODO, todo: todo };
}
export const EDIT_TODO = "todos/EDIT_TODO";
export function editTodo(todo) {
  return { type: EDIT_TODO, todo: todo };
}
// export const ALL_VISIBLE="filtre/ALL";
// export function allVisible(){
//   return {type: ALL_VISIBLE};
// }
// export const DONE_VISIBLE="filtre/DONE";
// export function doneVisible(){
//   return {type: DONE_VISIBLE};
// }
// export const PENDING_VISIBLE="filtre/PENDING";
// export function pendingVisible(){
//   return {type: PENDING_VISIBLE};
// }
