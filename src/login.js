import { useState } from "react";
import "./Login.css";

const Login = () => {
  const correctUsername = "ayeshan";
  const correctPassword = "ayeshan";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState();

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleClick = () => {
    if (username === correctUsername && password === correctPassword) {
      setMessage("Welcome");
    } else {
      setMessage("wrong username or password");
    }
  };

  return (
    <div className="login">
      <div className="form">
        <h2>Welcome to the library management system</h2>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={handleUsername}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={handlePassword}
        />
        <span className="error">{message}</span>
        <button onClick={handleClick}>Login</button>
        <span className="link">Forget your password?</span>
        <span className="link">Wanna Sign Up?</span>
      </div>
    </div>
  );
};

export default Login;
