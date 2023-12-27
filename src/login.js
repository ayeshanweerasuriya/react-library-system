import { useState } from "react";
import "./login.css";

const Login = () => {
  const [login, setLogin] = useState("Login In");
  const handleClick = () => {
    setLogin("Welcome");
  };

  return (
    <div className="login">
      <div className="form">
        <h2>Welcome to the library management system</h2>
        <input type="text" placeholder="username" />
        <input type="text" placeholder="password" />
        <button onClick={handleClick}>{login}</button>
        <span>Forget your password?</span>
        <span>Wanna Sign Up?</span>
      </div>
    </div>
  );
};

export default Login;
