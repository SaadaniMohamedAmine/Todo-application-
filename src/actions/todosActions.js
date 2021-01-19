import {
  ALL_TODOS,
  TODOS_DONE,
  TODOS_NOT_DONE,
  ADD_TODO,
  EDIT_TODO,
  DELETE_TODO,
  SAVE_TODO,
} from "./types";

export const allTodos = () => {
  return {
    type: ALL_TODOS,
  };
};
export const todoDone = () => {
  return {
    type: TODOS_DONE,
  };
};
export const todoNotDone = () => {
  return {
    type: TODOS_NOT_DONE,
  };
};
export const addTodo = (newTodo) => {
  return {
    type: ADD_TODO,
    payload: newTodo,
  };
};
export const saveTodo = (todo) => {
  return {
    type: SAVE_TODO,
    payload: todo,
  };
};
export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};
export const editTodo = (todo) => {
  return {
    type: EDIT_TODO,
    payload: todo,
  };
};
