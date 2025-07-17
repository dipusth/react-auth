import React, { useState } from "react";
import "./style.css";
import {
  addNewUser,
  isUserAlreadyReistered,
  type IuserType,
} from "@/LocalStorage";
import { Link } from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
export const Roles = {
  Superadmin: "SuperAdmin",
  Admin: "Admin",
  User: "User",
};

// export const Roles = {
//   Superadmin: "SuperAdmin",
//   Admin: "Admin",
//   User: "User",
// } as const;

// export type Roles = (typeof Roles)[keyof typeof Roles];
export const Register = () => {
  const [data, setData] = useState<IuserType>({
    name: "",
    username: "",
    password: "",
  });
  const [message, setMessage] = useState<string>("");
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const id = event.target.id;
    const value = event.target.value;
    setData({ ...data, [id]: value });
    setMessage("");
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (data.name == "" || data.username == "" || data.password == "") {
      setMessage("Please fill the form");
      return;
    }
    // If emnail Id already exist
    if (isUserAlreadyReistered(data.username)) {
      setMessage("User already exist.");
      return;
    }

    addNewUser(data);
    setMessage("User created. click on Login.");
    setData({
      name: "",
      username: "",
      password: "",
    });

    // Save the user in local storage
  };
  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <h3>Register</h3>
        <label for="name">Name</label>
        <input
          type="text"
          placeholder="Enter Name"
          id="name"
          value={data.name}
          onChange={handleInputChange}
        />
        <label for="username">Username</label>
        <input
          type="text"
          placeholder="Email or Phone"
          id="username"
          value={data.username}
          onChange={handleInputChange}
        />
        <label for="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          value={data.password}
          onChange={handleInputChange}
        />
        <button className="w-full">Register</button>
        <div className="social">
          {message && <p>{message} </p>}
          <Link to="/login">Login</Link>
        </div>
      </form>
    </>
  );
};
