import React from "react";
import "./Navbar.css";
import ViewsInput from "../../views/ViewsInput/ViewsInput";

const Navbar = ({ searchTerm, handleSearch }) => {
    return (
        <nav className="navbar">
            <h1 className="logo">hello</h1>
            <ul className="nav-links">
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/Add">Add</a>
                </li>
                <li>
                    <a href="/Update">Update</a>
                </li>
            </ul>
            <div className="search">
                <ViewsInput
                    type="text"
                    autoComplete="off"
                    name="text"
                    className="inputSearch"
                    placeholder="Search: by Name"
                    value={searchTerm}
                    onChange={(e) => handleSearch(e.target.value)}
                />
            </div>
        </nav>
    );
};

export default Navbar;
