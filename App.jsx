
import React, { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  localStorage.setItem("email", "test@gmail.com");
  localStorage.setItem("password", "12345");

  function login() {
    if (email === localStorage.getItem("email") &&
        password === localStorage.getItem("password"))
      setMsg("Login Successful");
    else
      setMsg("Invalid email or password");
  }

  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password"
        onChange={e => setPassword(e.target.value)} />
      <button onClick={login}>Login</button>
      <p>{msg}</p>
    </div>
  );
}

export default App;
