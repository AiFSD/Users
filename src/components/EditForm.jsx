import React, { useState } from "react";

const EditForm = ({ editingUser, onUpdate, onCancel }) => {
  const [name, setName] = useState(editingUser.name);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const updatedUser = { ...editingUser, name };
    onUpdate(updatedUser);
  };

    return (
      <div className="class">
        <form onSubmit={handleFormSubmit}>
          <input
            className="editinput"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Enter user name"
          />
          <button className="saveedit" type="submit">
            Update
          </button>
          <button className="cancel" type="button" onClick={onCancel}>
            Cancel
          </button>
        </form>
      </div>
    );
};

export default EditForm;
