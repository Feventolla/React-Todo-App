import axios from "axios";
import plan1 from "../assets/plan1.svg";
import plan2 from "../assets/plan2.svg";
import "./login-Register.css";

import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  // const logging = (e) => {
  //   e.preventDefault();
  //   login({ email, password });
  //   setEmail(email);
  //   setPassword(password);
  // console.log(username);
  // };

  const login = (e) => {
    e.preventDefault();
    // const location = useLocation();
    let req = {
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    };
    axios
      .post("/api/users/login", req)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        console.log(localStorage.getItem("token"));
        navigate("/todolist");
        // console.log(res.data);
        // alert(res.data.message);
        //   if (res.status === 200) {
        //     localStorage.setItem("token", JSON.stringify(res.data.token));
        //     navigate("/todolist");
        //   } else {
        //     // console.log("error");
        //     navigate("/login");
        //     // window.location.reload();
        //     // alert(res.data);
        //   }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="App"></div>
      <div className="app-inside">
        <div className="auth-form-container">
          <img
            src={plan1}
            alt="top-image"
            style={{
              marginLeft: "4em",
              width: 100,
              height: 100,
            }}
          />
          <h2>Log in</h2>
          <form className="login-form" onSubmit={(e) => login(e)}>
            <label htmlFor="username">Email : </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="abc@gmail.com"
              id="email"
              name="email"
            ></input>
            <label htmlFor="password">password : </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="********"
              id="password"
              name="password"
            ></input>
            <button type="submit">Log In</button>
          </form>
          <button className="link-btn" onClick={() => navigate("/register")}>
            Don't have an account Register here
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
