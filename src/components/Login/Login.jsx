import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [myValue, setMyValue] = useState({ username: "", password: "" });
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});

  const handleInputChange = (e) => {
    setMyValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      setUser(data);
    } catch {
      setError(true);
    }
    setLoading(false);
  };

  return (
    <div className="container">
      <span className="user">{user.name}</span>
      <form action="">
        <input
          type="text"
          placeholder="username"
          name="username"
          value={myValue.username}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={myValue.password}
          onChange={handleInputChange}
        />
        <button
          disabled={!myValue.username || !myValue.password}
          onClick={handleClick}
        >
          {loading ? "please wait" : "Login"}
        </button>
        <span
          data-testid="error"
          style={{ visibility: error ? "visible" : "hidden" }}
        >
          Something went wrong!
        </span>
      </form>
    </div>
  );
};

export default Login;
