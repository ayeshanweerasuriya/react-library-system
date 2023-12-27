import { useState } from "react";
import "./Home.css";

const Home = () => {
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [message, setMessage] = useState();

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = () => {
    setMessage("submitted successfully");
    comment(name, description);
  };

  const comment = (name, description) => {
    return (
      <div className="comment">
        <text>{name}</text>
        <p>{description}</p>
      </div>
    );
  };
  return (
    <div className="main-container">
      <div className="input">
        <input
          type="text"
          placeholder="name"
          onChange={handleName}
          value={name}
        ></input>
        <input
          type="text"
          placeholder="description"
          onChange={handleDescription}
          value={description}
        ></input>
        <span>{message}</span>
        <button onClick={handleSubmit}>submit</button>
      </div>
      <div>{comment}</div>
    </div>
  );
};

export default Home;
