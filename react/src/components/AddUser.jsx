import { useEffect, useState, useRef } from "react";

import axios from "axios";
import "./login-Register.css";
import bcrypt from "bcryptjs";
import { useNavigate } from "react-router-dom";
import plan4 from "../assets/plan4.svg";
// useRef, formik

// useState
// useEffect
//

const AddUser = ({ OnAdd }, props) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  // const passhash = useRef();
  // const [gender, setGender] = useState("");
  // const [reminder, setReminder] = useState(false);
  // const [formData, setFormData] = useState({
  //   name: "bomge",
  //   gender: "",
  // });

  // const { name, gender } = formData;
  // let id = 11;
  // let limit = 2;

  // axios get, post, put, delete

  // useEffect(() => {
  //   axios
  //     .get(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })
  //     .then((response) => {
  //       setData(response.data);
  //     })
  //     .catch((err) => console.error(err.messpassword));
  // }, []);

  // data.forEach((item) => {
  //   console.log(item.title);
  // });

  const onadd = (e) => {
    e.preventDefault();
    OnAdd({ name, password, email });
    setName("");
    setPassword("");
    setEmail("");

    // setReminder(false);
  };

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };
  return (
    <div>
      <div className="App"></div>
      <div className="app-inside">
        <div className="auth-form-container">
          <img
            src={plan4}
            alt="top-image"
            style={{
              marginLeft: "4em",
              width: 100,
              height: 100,
            }}
          />
          <h2>Register</h2>
          <form className="login-form" onSubmit={onadd}>
            <label htmlFor="username">Username : </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="name"
              required={true}
              minLength={3}
              placeholder="ABC"
              id="name"
              name="name"
            ></input>
            <label htmlFor="email">Email : </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required={true}
              placeholder="abc@gmail.com"
              id="email"
              name="email"
            ></input>

            <label htmlFor="password">password : </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              // ref={passhash}
              type="password"
              required={true}
              minLength={4}
              placeholder="********"
              id="password"
              name="password"
            ></input>
            <button type="submit">Create</button>
          </form>
          <button className="link-btn" onClick={() => navigate("/login")}>
            Already have an account Login here
          </button>
        </div>
      </div>
    </div>
  );
};

// <div>
//         <label>reminder</label>
//         <input
//           type="checkbox"
//           checked={reminder}
//           value={reminder}
//           onChange={(e) => setReminder(e.currentTarget.checked)}
//         />
//       </div>

export default AddUser;
