import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Todolist from "./todolist";
import "../App.css";

const updateTodo = (props) => {
  const [todo, setTodo] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isCompleted, setIsCompleted] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  // console.log("props", location.state.id);
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        let res = await fetch(`/api/todos/${location.state.id}`);
        const data = await res.json();
        setTodo(data);
        console.log(data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchTodos();
  }, []);

  // useEffect(() => {
  //   console.log("todo", todo);
  // });

  const updateTodo = async (e) => {
    e.preventDefault();
    const result = await fetch(`/api/todos/${location.state.id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(todo),
    });
    try {
      const data = await result.json();
      console.log("updated ", data);
      // setTodo([...todo, data]);
      navigate("/todolist");
    } catch (err) {
      console.log(err.message);
    }
  };
  // const handle = (e) => {
  //   setTodo({ ...todo, [e.target.name]: e.target.value });
  // };
  return (
    <div className="app">
      <div className="app-inside">
        <div className="auth-form-container" style={{ height: 300 }}>
          <h2 style={{ marginLeft: 3 }}>update Todo</h2>
          <form className="login-form" onSubmit={updateTodo}>
            <label>Title : </label>
            <input
              // defaultValue={todo.title}
              value={todo.title}
              onChange={(e) => setTodo({ ...todo, title: e.target.value })}
              // value={titl}
              type="text"
              name="title"
            ></input>

            <label>description : </label>
            <input
              // defaultValue={todo.description}
              value={todo.description}
              onChange={(e) =>
                setTodo({ ...todo, description: e.target.value })
              }
              // value={description}
              type="text"
              name="description"
            ></input>
            <button type="submit">Update</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default updateTodo;
