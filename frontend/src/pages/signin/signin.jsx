import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signin() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token") || "";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}users/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            pass: password,
          }),
        }
      );
      if (!response.ok) {
        const res = await response.json();
        throw new Error(res);
      } else {
        const data = await response.json();
        alert("You are logged in!");
        localStorage.setItem("token", data.token);
        navigate("/");
      }
    } catch (error) {
      alert(error.msg);
    }
  };
  return (
    <div>
      <h1>Sign In </h1>
      <br />
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        placeholder="Enter Password"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Signin;
