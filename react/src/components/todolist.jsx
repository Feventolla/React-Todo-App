import { useEffect, useState, useRef } from "react";
import axios from "axios";
import ProtectedRoutes from "../Pages/protectedroutes";
import "../App.css";
import {
  useNavigate,
  useLocation,
  Link,
  Route,
  Routes,
} from "react-router-dom";
import HeaderButton from "./HeaderButton";
import AddTodo from "../components/AddTodo";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

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

    <div>
      <nav className="nav-add">
        <Button onClick={logout}>Log out</Button>
        <Button onClick={() => navigate("/addtodo")}>addtodo</Button>
      </nav>

      <h2>Todo list</h2>
      {todo.length > 0 ? (
        <div>
          {todo.map((todos, index) => (
            <div
              className="card"
              style={{ width: 700, marginLeft: 300 }}
              key={index}
            >
              <h5 className="card-header">{todos._id}</h5>
              <div className="card-body">
                <h5 className="card-title">{todos.title}</h5>
                <p className="card-text">{todos.description} </p>
                <Button
                  className="btn"
                  onClick={() =>
                    navigate("/updatetodo/" + todos._id, {
                      state: { id: todos._id },
                    })
                  }
                >
                  update
                </Button>{" "}
                <Button
                  className="btn"
                  text="delete"
                  onClick={() => deleteTodo(todos._id)}
                >
                  Delete
                </Button>{" "}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h2 style={{ textAlign: "center" }}>no task available</h2>
      )}
    </div>
  );
};

//                 <Button
//                   className="btn"
//                   onClick={() =>
//                     navigate("/updatetodo/" + todos._id, {
//                       state: { id: todos._id },
//                     })
//                   }
//                 >
//                   update
//                 </Button>{" "}
//                 <Button
//                   className="btn"
//                   text="delete"
//                   onClick={() => deleteTodo(todos._id)}
//                 >
//                   Delete
//                 </Button>{" "}
//               </h3>
//             ))}
//           </div>

export default Todolist;
