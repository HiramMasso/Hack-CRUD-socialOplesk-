import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UserForm.css";
import ViewsInput from "../../views/ViewsInput/ViewsInput";

const Add = ({ addUser }) => {
    const [formData, setFormData] = useState({ name: "", email: "", age: "" });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
        setErrors((prevErrors) => ({ ...prevErrors, [name]: !value.trim() }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        Object.keys(formData).forEach((field) => {
            if (!formData[field].trim()) {
                newErrors[field] = true;
            }
        });
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            addUser(formData);
            navigate("/");
        }
    };

    const getPlaceholder = (field) => {
        return errors[field] ? "This field is required" : `Enter ${field.charAt(0).toUpperCase() + field.slice(1)}...`;
    };

    return (
        <div>
            <h2 className="tittle">Add users form</h2>
            <div className="box1">
                <form className="inputForm" onSubmit={handleSubmit}>
                    <ViewsInput
                        type="text"
                        name="name"
                        className={`input1 ${errors.name ? "error" : ""}`}
                        placeholder={getPlaceholder("name")}
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <ViewsInput
                        type="email"
                        name="email"
                        className={`input1 ${errors.email ? "error" : ""}`}
                        placeholder={getPlaceholder("email")}
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <ViewsInput
                        type="number"
                        name="age"
                        className={`input1 ${errors.age ? "error" : ""}`}
                        placeholder={getPlaceholder("age")}
                        value={formData.age}
                        onChange={handleChange}
                        min="0"
                        max="99"
                        step="1"
                    />
                    <button className="addButton">
                        <span>Add</span>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Add;
