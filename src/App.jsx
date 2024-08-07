// App.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import Box from "./components/Box";
import Form from "./components/Form";
import EditForm from "./components/EditForm";

import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [showEditForm, setShowEditForm] = useState(false);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const handleEdit = (user) => {
    setEditingUser(user);
    setShowEditForm(true); // Show the edit form when Edit button is clicked
  };

  const handleDelete = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
      })
      .catch((error) => console.error(error));
  };

  const handleUpdate = (updatedUser) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${updatedUser.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedUser),
    })
      .then((response) => response.json())
      .then((data) => {
        setUsers((prevUsers) =>
          prevUsers.map((user) =>
            user.id === updatedUser.id ? updatedUser : user
          )
        );
        setShowEditForm(false);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="con">
      <div className="con">
        <div className="heading">
          <h1>Users</h1>
        </div>
        <Form setUsers={setUsers} />
        <Box
          users={users}
          onEdit={handleEdit}
          onDelete={handleDelete}
          editingUser={editingUser}
          showEditForm={showEditForm}
          onUpdate={handleUpdate}
          onCancel={() => setShowEditForm(false)}
        />
      </div>
    </div>
  );
};

export default App;
