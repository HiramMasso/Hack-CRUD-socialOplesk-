import React, { useState } from "react";
import UserTable from "../../views/UserTable/UserTable";
import "./Update.css";

const Update = ({ users, onSave }) => {
    const [editingIndex, setEditingIndex] = useState(null);
    const [editedUser, setEditedUser] = useState({});

    const handleEditClick = (index) => {
        setEditingIndex(index);
        setEditedUser(users[index]);
    };

    const handleSaveClick = (index) => {
        onSave(index, editedUser);
        setEditingIndex(null);
    };

    const handleChange = (field, value) => {
        setEditedUser({ ...editedUser, [field]: value });
    };

    return (
        <div>
            <h2 className="tittle">Update elements</h2>
            <div className="box">
                <UserTable
                    users={users}
                    editingIndex={editingIndex}
                    handleEditClick={handleEditClick}
                    handleSaveClick={handleSaveClick}
                    handleChange={handleChange}
                    editedUser={editedUser}
                />
            </div>
        </div>
    );
};

export default Update;
