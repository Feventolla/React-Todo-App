import { useEffect, useState, useRef } from "react";
import axios from "axios";
import "../App.css";
import { useNavigate, useLocation, Link } from "react-router-dom";
import HeaderButton from "./HeaderButton";
import AddTodo from "../components/AddTodo";

const Todolist = () => {
  const [showaddtodo, setshowaddtodo] = useState(false);
  const [todo, setTodo] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchTodo = async () => {
      const token = localStorage.getItem("token");
      console.log("token", token);
      const response = await fetch("/api/todos", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "content-type": "application/json",
          Accept: "application/json",
        },
      });

      const todo = await response.json();
      setTodo(todo);
      console.log(todo);
    };
    fetchTodo();
  }, []);

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

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const deleteTodo = async (id) => {
    try {
      const res = await fetch(`/api/todos/${id}`, { method: "DELETE" });
      // console.log("deleting with id", id);
      setTodo(todo.filter((todo) => todo._id !== id));
    } catch (err) {
      console.log(err);
    }
  };
  return (
    // <Fragment>
    <div className="app">
      <div className="App-inside">
        <div className="close-button">
          <button onClick={logout}>Log out</button>
          <HeaderButton
            Add={() => {
              setshowaddtodo(!showaddtodo);
            }}
            showadd={showaddtodo}
          />{" "}
          {showaddtodo && <AddTodo addTodo={addTodo} />}
        </div>
        <h2>Todo list</h2>
        {todo.length > 0 ? (
          <div className="cardAll">
            {todo.map((todos, index) => (
              <h3 className="card" key={index}>
                {todos.title}{" "}
                <button
                  className="btn"
                  onClick={() =>
                    navigate("/updatetodo/" + todos._id, {
                      state: { id: todos._id },
                    })
                  }
                >
                  update
                </button>{" "}
                <button
                  className="btn"
                  text="delete"
                  onClick={() => deleteTodo(todos._id)}
                >
                  Delete
                </button>{" "}
              </h3>
            ))}
          </div>
        ) : (
          "no task available"
        )}
      </div>
    </div>
  );
};

// <Link
// to={"updatetodo/" + todos._id}
// state={{ id: todos._id }}
// >
// Update
// </Link>

// <Link
//                   to={{
//                     pathname: "/updatetodo",
//                     state: todos._id,
//                   }}
//                 >
//                   {" "}
//                   Update{" "}
//                 </Link>

export default Todolist;
