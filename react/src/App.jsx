import { useEffect, useState } from "react";
import UserItem from "./components/UserItem";
import Button from "./components/Button";
import HomePage from "./Pages/homepage";
import AddUser from "./components/AddUser";
import AddTodo from "./components/AddTodo";
import Login from "./components/Login";
import TodoList from "./components/todolist";
import UpdateTodo from "./components/updateTodo";
import Particles from "./Particles/particles";
import axios from "axios";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
  Navigate,
} from "react-router-dom";
import "./App.css";
import ProtectedRoutes from "./Pages/protectedroutes";
import Particle from "./Particles/particles";

function App() {
  const [showaddtodo, setshowaddtodo] = useState(false);
  const [data, setData] = useState([]);
  // const [todo, setTodo] = useState([]);
  const [isAuth, setIsAuth] = useState(true);
  // const [currentPage, setCurrentPage] = useState("login");

  const navigate = useNavigate();
  // const location = useLocation();

  // const changingform = (form) => {
  //   setCurrentPage(form);
  // };
  // useEffect(() => {
  //   console.log("Feven");
  // }, []);

  const deleteData = async (id) => {
    try {
      await fetch(`/api/users/${id}`, { method: "DELETE" });
      console.log("deleting user with id", id);
      setData(data.filter((user) => user._id !== id));
    } catch (error) {
      console.log(error);
    }

    // let a = data.filter((user) => user.id != id);
    // console.log(a);
  };

  const onToggle = (id) => {
    setData(
      data.map((user) =>
        user.id === id ? { ...user, reminder: !user.reminder } : user
      )
    );
    // setData(data);
    console.log("double clicked", id);
  };

  //creating new user
  const addUser = async (user) => {
    const res = await fetch("/api/users", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user),
    });
    const dataa = await res.json();

    setData([...data, dataa]);
    console.log(user);
    navigate("/login");
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/users");
      const data = await response.json();
      setData(data);
      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/updatetodo/:id" element={<UpdateTodo />} />
        <Route
          path="/todolist"
          element={
            <ProtectedRoutes>
              {" "}
              <TodoList />{" "}
            </ProtectedRoutes>
          }
        />
        <Route
          path="/addTodo"
          element={
            <ProtectedRoutes>
              {" "}
              <AddTodo />{" "}
            </ProtectedRoutes>
          }
        />
        <Route path="/register" element={<AddUser OnAdd={addUser} />} />
        <Route
          path="/userlist"
          element={
            <h3>
              {data.length > 0 ? (
                <UserItem
                  data={data}
                  deleteData={deleteData}
                  onToggle={onToggle}
                />
              ) : (
                "no task available"
              )}
            </h3>
          }
        />
      </Routes>
    </div>
  );
}
export default App;

// <div className="App">
//         <div className="app-inside">

//           {currentPage === "login" ? (
//             <Login login={login} onFormSwitch={changingform} />
//           ) : (
//             <AddUser onFormSwitch={changingform} OnAdd={addUser} />
//           )}

//           <h3>
//             {data.length > 0 ? (
//               <UserItem
//                 data={data}
//                 deleteData={deleteData}
//                 onToggle={onToggle}
//               />
//             ) : (
//               "no task available"
//             )}
//           </h3>
//         </div>
//       </div>

// <HeaderButton
//           Add={() => {
//             setshowadduser(!showadduser);
//           }}
//           showadd={showadduser}
//         />
//         {showadduser && <AddUser OnAdd={addUser} />}

// useEffect(() => {
//   axios
//     .get(`https://localhost:4000/user`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//     .then((response) => {
//       setData(response.data);
//     })
//     .catch((err) => console.error(err.message));
// }, []);

// // // //react-router-dom
// // // // axios
// // // //tailwind
// // // //ES-6, map, filter, slice, splice,

// const handleClick = (e) => {
//   e.preventDefault();

//   console.log(name);
// };

// {data.map((user, index) => (
//   <UserItem user={user} key={index} />
// ))}
// <form>
//   <input
//     type="text"
//     name="name"
//     value={name}
//     onChange={(e) => setName(e.target.value)}
//   />
//   <button onClick={handleClick}>Submit</button>
// </form>
