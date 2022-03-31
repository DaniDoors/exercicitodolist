import { createStore, combineReducers, applyMiddleware } from "redux";
import { reduceTodos, todosMiddleware } from "./redux/reducers";

const reducer = combineReducers({ todos: reduceTodos });

export const store = createStore(reducer, applyMiddleware(todosMiddleware));
