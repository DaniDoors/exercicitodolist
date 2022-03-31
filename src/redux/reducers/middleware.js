import {
  addTodo,
  replaceTodos,
  REQUEST_ADD_TODO,
  REQUEST_TODOS,
  REQUEST_UPDATE_TODO,
  updateTodo,
  REQUEST_DELETE_TODO,
  requestTodos,
  REQUEST_EDIT_TODO,
} from "../actions";
import {
  getTodos,
  postDeleteTodo,
  postEditTodo,
  postNewTodo,
  postUpdateTodo,
} from "../todosApi";

export const todosMiddleware = (store) => (next) => async (action) => {
  next(action);

  if (action.type === REQUEST_TODOS) {
    const todos = await getTodos();
    store.dispatch(replaceTodos(todos));
  }
  if (action.type === REQUEST_ADD_TODO) {
    console.log(todo);
    const todo = await postNewTodo(action.todo);
    store.dispatch(addTodo(todo));
  }
  if (action.type === REQUEST_UPDATE_TODO) {
    const todo = await postUpdateTodo(action.todo);
    store.dispatch(updateTodo(todo));
  }
  if (action.type === REQUEST_DELETE_TODO) {
    await postDeleteTodo(action.todo);
    store.dispatch(requestTodos());
  }

  if (action.type === REQUEST_EDIT_TODO) {
    console.log(action.todo);
    await postEditTodo(action.todo);
    store.dispatch(requestTodos());
  }
};
