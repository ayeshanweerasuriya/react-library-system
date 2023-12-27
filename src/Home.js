import { useState } from "react";
import "./Home.css";

const Home = () => {
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [message, setMessage] = useState();
  const [comments, setComments] = useState([]);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = () => {
    if (name && description) {
      const newComment = { name, description };
      setComments([...comments, newComment]);
      setMessage("Submitted successfully");
      // Clear input fields
      setName("");
      setDescription("");
    } else {
      setMessage("Name and description are required");
    }
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
      <div className="comments">
        {comments.map((comment, index) => (
          <div key={index} className="comment">
            <p>{comment.name}</p>
            <p>{comment.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
