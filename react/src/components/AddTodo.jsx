import React, { useState } from "react";
import "./login-Register.css";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

const AddTodo = () => {
  const [todo, setTodo] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isCompleted, setIsCompleted] = useState("");
  const navigate = useNavigate();

  const addTodo = async (Todo) => {
    const token = localStorage.getItem("token");
    console.log("token addd", token);
    const res = await fetch("/api/todos", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(Todo),
    });
    const todos = await res.json();

    setTodo([...todo, todos]);
  };

  const addtodo = (e) => {
    e.preventDefault();
    addTodo({ title, description });
    setTitle("");
    setDescription("");
    navigate("/todolist");
  };

  return (
    <div className="app-inside">
      <div className="auth-form-container" style={{ height: 500 }}>
        <h2 style={{ marginLeft: 3 }}>New Todo</h2>
        <form className="login-form" onSubmit={addtodo}>
          <label htmlFor="title">Title : </label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="title"
            required={true}
            minLength={3}
            id="title"
            name="title"
          ></input>

          <label htmlFor="description">description : </label>
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            // ref={passhash}
            type="description"
            required={true}
            minLength={4}
            id="description"
            name="description"
          ></input>
          <Button type="submit">Send</Button>
        </form>
      </div>
    </div>
  );
};

//     <label>IsCompleted</label>
// <input
//   type="checkbox"
//   checked={reminder}
//   value={reminder}
//   onChange={(e) => setReminder(e.currentTarget.checked)}
// />

export default AddTodo;
