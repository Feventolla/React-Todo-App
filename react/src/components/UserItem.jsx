// import Button from "/Button";
import react, { Fragment } from "react";

const UserItem = ({ data, deleteData, onToggle }) => {
  return (
    // <Fragment>
    <div className="app">
      <div className="app-inside">
        <h2 style={{ color: "white" }}>User list</h2>
        <div className="cardAll">
          {data.map((user, index) => (
            <h3 className="card" key={index}>
              {user.name}{" "}
              <button
                className="btn"
                style={{ backgroundColor: "red" }}
                text="delete"
                onClick={() => deleteData(user._id)}
              >
                Delete
              </button>
            </h3>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserItem;
