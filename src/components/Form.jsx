import React, { useState } from "react";

const Form = ({ setUsers }) => {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");

  const handleClick = () => {
    setShowForm(!showForm);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const userData = { id: new Date().getTime(), name }; 

    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        setUsers((prevUsers) => [...prevUsers, userData]); 
        setName(""); 
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <div >
        <button className="show" onClick={handleClick}>
          Click here to add User
        </button>
      </div>
      {showForm && (
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            className="title-bar"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Enter user name"
          />
          <button className="submit">Mount User</button>
        </form>
      )}
    </div>
  );
};

export default Form;
