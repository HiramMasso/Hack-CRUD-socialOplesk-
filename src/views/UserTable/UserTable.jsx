import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import UserRow from "../../components/UserRow/UserRow";
import "../../components/UserTable/Users.css";
import EditableUserRow from "../../components/EditableUsersRow/EditableUserRow";

const UserTable = ({
                       users,
                       deleteUser,
                       editingIndex,
                       handleEditClick,
                       handleSaveClick,
                       handleChange,
                       editedUser
                   }) => {
    const location = useLocation();
    const [emailError, setEmailError] = useState(false);

    return (
        <table className="table">
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th className={emailError ? "error" : ""}>Mail</th>
            </tr>
            </thead>
            <tbody>
            {users.map((user, index) => (
                location.pathname === "/" ? (
                    <UserRow
                        key={user.id}
                        user={user}
                        index={index}
                        deleteUser={deleteUser}
                    />
                ) : (
                    <EditableUserRow
                        key={user.id}
                        user={user}
                        index={index}
                        editingIndex={editingIndex}
                        editedUser={editedUser}
                        handleEditClick={handleEditClick}
                        handleSaveClick={handleSaveClick}
                        handleChange={handleChange}
                        setEmailError={setEmailError}
                    />
                )
            ))}
            </tbody>
        </table>
    );
};

export default UserTable;
