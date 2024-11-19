import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Users from "./components/UserTable/Users";
import Add from "./components/Add/Add";
import Update from "./components/Update/Update";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
        setUsers(storedUsers);
    }, []);

    const addUser = (user) => {
        const userId = users.length + 1;
        const updatedUser = { ...user, id: userId };
        const updatedUsers = [...users, updatedUser];
        setUsers(updatedUsers);
        localStorage.setItem("users", JSON.stringify(updatedUsers));
    };

    const updateUser = (index, updatedUser) => {
        const updatedUsers = users.map((user, idx) =>
            idx === index ? updatedUser : user
        );
        setUsers(updatedUsers);
        localStorage.setItem("users", JSON.stringify(updatedUsers));
    };

    const deleteUser = (index) => {
        let updatedUsers = users.filter((_, userIndex) => userIndex !== index);
        updatedUsers = updatedUsers.map((user, idx) => ({
            ...user,
            id: idx + 1
        }));

        setUsers(updatedUsers);
        localStorage.setItem("users", JSON.stringify(updatedUsers));
    };

    const handleSearch = (term) => {
        setSearchTerm(term);
        if (term !== "") {
            const results = users.filter((user) =>
                user.name.toLowerCase().includes(term.toLowerCase())
            );
            setSearchResults(results);
        } else {
            setSearchResults([]);
        }
    };

    return (
        <div className="App-header">
            <div className="background"></div>
            <Router>
                <Navbar
                    searchTerm={searchTerm}
                    handleSearch={handleSearch}
                    searchResults={searchResults}
                />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Users
                                users={users}
                                searchResults={searchResults}
                                deleteUser={deleteUser}
                                TotalUsers={users.length > 0 ? users[users.length - 1].id : 0}
                            />
                        }
                    />
                    <Route
                        path="/Add"
                        element={
                            <Add addUser={addUser} />
                        }
                    />
                    <Route
                        path="/Update"
                        element={
                            <Update users={users} onSave={updateUser} />
                        }
                    />
                </Routes>
            </Router>
        </div>
    );
};

export default App;
