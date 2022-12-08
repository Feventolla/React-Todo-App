import React, { useState } from "react";
import "./login-Register.css";
import { useNavigate } from "react-router-dom";

const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isCompleted, setIsCompleted] = useState("");
  const navigate = useNavigate();

  const addtodo = (e) => {
    e.preventDefault();
    addTodo({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="app-inside">
      <div className="auth-form-container" style={{ height: 250 }}>
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
          <button type="submit">Send</button>
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
