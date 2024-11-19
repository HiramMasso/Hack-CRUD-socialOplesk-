import React, { useState } from "react";
import "./UserRow.css";
import ViewsButton from "../../views/ViewsButton/ViewsButton";

const UserRow = ({ user, index, deleteUser }) => {
    const [isNameTruncated, setIsNameTruncated] = useState(true);

    const handleRowClick = () => {
        setIsNameTruncated(!isNameTruncated);
    };

    return (
        <tr onClick={handleRowClick}>
            <td>{user.id}</td>
            <td className={isNameTruncated ? "truncateName" : ""}>{user.name}</td>
            <td>{user.age}</td>
            <td className="truncateMail">{user.email}</td>
            <td>
                <ViewsButton
                    className="deleteButton"
                    onClick={() => deleteUser(index)}
                    viewBox={"0 0 50 59"}
                    pathD={"M0 7.5C0 5.01472 2.01472 3 4.5 3H45.5C47.9853 3 50 5.01472 50 7.5V7.5C50 8.32843 49.3284 9 48.5 9H1.5C0.671571 9 0 8.32843 0 7.5V7.5Z"}
                    pathD1={"M17 3C17 1.34315 18.3431 0 20 0H29.3125C30.9694 0 32.3125 1.34315 32.3125 3V3H17V3Z"}
                    pathD2={"M2.18565 18.0974C2.08466 15.821 3.903 13.9202 6.18172 13.9202H43.8189C46.0976 13.9202 47.916 15.821 47.815 18.0975L46.1699 55.1775C46.0751 57.3155 44.314 59.0002 42.1739 59.0002H7.8268C5.68661 59.0002 3.92559 57.3155 3.83073 55.1775L2.18565 18.0974ZM18.0003 49.5402C16.6196 49.5402 15.5003 48.4209 15.5003 47.0402V24.9602C15.5003 23.5795 16.6196 22.4602 18.0003 22.4602C19.381 22.4602 20.5003 23.5795 20.5003 24.9602V47.0402C20.5003 48.4209 19.381 49.5402 18.0003 49.5402ZM29.5003 47.0402C29.5003 48.4209 30.6196 49.5402 32.0003 49.5402C33.381 49.5402 34.5003 48.4209 34.5003 47.0402V24.9602C34.5003 23.5795 33.381 22.4602 32.0003 22.4602C30.6196 22.4602 29.5003 23.5795 29.5003 24.9602V47.0402Z"}
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </td>
        </tr>
    );
};

export default UserRow;
