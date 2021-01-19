import {
  ALL_TODOS,
  TODOS_DONE,
  TODOS_NOT_DONE,
  ADD_TODO,
  EDIT_TODO,
  DELETE_TODO,
  SAVE_TODO,
} from "../actions/types";
import { v4 as uuidv4 } from "uuid";
const todosList = {
  todos: [
    {
      id: uuidv4(),
      title: "work",
      description: "working as a web developer ",
      status: "notDone",
    },
    {
      id: uuidv4(),
      title: "play",
      description: "Playing pig pong sport",
      status: "done",
    },
    {
      id: uuidv4(),
      title: "travel",
      description: "Travelling to different places",
      status: "notDone",
    },
    {
      id: uuidv4(),
      title: "read",
      description: "Read many books in 2021",
      status: "notDone",
    },
  ],
  filt: null,
  save: null,
};

const todosReducer = (state = todosList, action) => {
  switch (action.type) {
    case ALL_TODOS:
      return { ...state, filt: null };
    case TODOS_DONE:
      return { ...state, filt: "done" };
    case TODOS_NOT_DONE:
      return { ...state, filt: "notDone" };
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case SAVE_TODO:
      return { ...state, save: action.payload };
    case EDIT_TODO:
      return {
        ...state,
        save: null,
        todos: state.todos.map((el) =>
          el.id === action.payload.id ? action.payload : el
        ),
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((elt) => elt.id !== action.payload),
      };
    default:
      return state;
  }
};

export default todosReducer;
