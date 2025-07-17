import React, { useState } from "react";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import { getUser, updateActiveUser } from "@/LocalStorage";

interface IloginType {
  username: string;
  password: string;
}
export const Login = () => {
  const [data, setData] = useState<IloginType>({
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  const handleInputChannge = (event: React.ChangeEvent<HTMLInputElement>) => {
    const id = event.target.id;
    const value = event.target.value;
    setData({ ...data, [id]: value });
    console.log("handleInputChannge", event);
    console.log("handleInputChannge value", value);
    console.log("data value", data);
  };
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (data.username == "" || data.password == "") {
      alert("Please fill up the form");
      return;
    }

    const user = getUser(data.username, data.password);
    console.log("user", user);
    if (user == null) {
      alert("Username or password is not correct");
      return;
    }
    console.log("user", user);
    updateActiveUser(user);
    navigate("/dashboard");
  };
  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <h3>Login</h3>
        <label for="username">Username</label>
        <input
          type="text"
          placeholder="Email or Phone"
          id="username"
          value={data.username}
          onChange={handleInputChannge}
        />
        <label for="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          value={data.password}
          onChange={handleInputChannge}
        />
        <button className="w-full">Log In</button>
        <div className="social">
          <Link to="/Register">Register</Link>
        </div>
      </form>
    </>
  );
};
