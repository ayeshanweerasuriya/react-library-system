import { useState } from "react";
import "./login.css";

const Login = () => {
  const [message, setMessage] = useState();
  const handleClick = () => {
    setMessage("wrong username or password");
  };

  return (
    <div className="login">
      <div className="form">
        <h2>Welcome to the library management system</h2>
        <input type="text" placeholder="username" />
        <input type="text" placeholder="password" />
        <span className="error">{message}</span>
        <button onClick={handleClick}>Login</button>
        <span className="link">Forget your password?</span>
        <span className="link">Wanna Sign Up?</span>
      </div>
    </div>
  );
};

export default Login;
