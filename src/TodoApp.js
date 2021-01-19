import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  allTodos,
  todoDone,
  todoNotDone,
  saveTodo,
  editTodo,
  deleteTodo,
  addTodo,
} from "./actions/todosActions";
import Addtodo from "./Addtodo";

const TodoApp = () => {
  const todoList = useSelector((state) => state.todosReducer);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  useEffect(() => {
    if (todoList.save) {
      setInput(todoList.save.title);
    }
  }, [todoList.save]);
  const add = () => {
    if (input) {
      if (!todoList.save) {
        dispatch(addTodo({ id: uuidv4(), title: input, status: "notDone" }));
        setInput("");
      } else {
        dispatch(editTodo({ ...todoList.save, title: input }));
        setInput("");
      }
    }
  };
  return (
    <div className="todos-page">
      <div className="todos-page-part1">
        
        <button
          onClick={() => {
            dispatch(allTodos());
          }}
        >
          All tasks
        </button>
      
        <hr height="25px" width="70%" color="#ababab" />
        <h4>Filter by :</h4>
        
        <button onClick={() => dispatch(todoDone())}>Tasks done</button>
        <button onClick={() => dispatch(todoNotDone())}>Tasks not done</button>
      
        <hr height="25px" width="70%" color="#ababab" />
        <h4>Add new todo to the list</h4>
        <Addtodo todoList={todoList} />
        <hr height="25px" width="70%" color="#ababab" />
        <h4>Edit todo :</h4>
        <div>
          <input
            type="text"
            name="title"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="edit-input"
            placeholder="title"
          />
          <button className="edit-input" onClick={add}>
            Save
          </button>
        </div>
      </div>
      <div className="todos-page-part2">
        <h3 className="todoList-title">Todo list :</h3>
        <hr height="50px" width="100%" color="#ababab" />
        <div className="list-todos">
          {todoList.filt
            ? todoList.todos
                .filter((elt) => elt.status === todoList.filt)
                .map((elt) => (
                  <div className="one-todo">
                    <h4>{elt.title}</h4>
                    <h3>{elt.status}</h3>
                    <p>{elt.description}</p>
                    <button
                      onClick={() => {
                        dispatch(saveTodo(elt));
                      }}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        dispatch(deleteTodo(elt.id));
                      }}
                    >
                      Delete
                    </button>
                  </div>
                ))
            : todoList.todos.map((elt) => (
                <div className="one-todo">
                  <h4>{elt.title}</h4>
                  <h3>{elt.status}</h3>
                  <p>{elt.description}</p>
                  <button
                    onClick={() => {
                      dispatch(saveTodo(elt));
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      dispatch(deleteTodo(elt.id));
                    }}
                  >
                    Delete
                  </button>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
