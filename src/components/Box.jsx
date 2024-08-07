
import React from "react";
import EditForm from "./EditForm";

const Box = ({
  users,
  onEdit,
  onDelete,
  editingUser,
  showEditForm,
  onUpdate,
  onCancel,
}) => {
  return (
    <>
   
      <div className="container">
        <div className="user-grid">
          {users.map((user) => (
            <div key={user.id} className="user-item">
              <h4>{user.name}</h4>
              <p>ID: {user.id}</p>
              <button className="edit" onClick={() => onEdit(user)}>Edit</button>
              <button className="delete" onClick={() => onDelete(user.id)}>Delete</button>
              {showEditForm && editingUser.id === user.id && (
                <EditForm
                  editingUser={editingUser}
                  onUpdate={onUpdate}
                  onCancel={onCancel}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Box;
