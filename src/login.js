import "./login.css";
const Login = () => {
  return (
    <div className="login">
      <form className="form">
        <h2>Welcome to library management system</h2>
        <input type="text" placeholder="username"></input>
        <input type="text" placeholder="password"></input>
        <button>LoginIn</button>
        <text>forget your password?</text>
        <text>wanna Sign Up?</text>
      </form>
    </div>
  );
};

export default Login;
