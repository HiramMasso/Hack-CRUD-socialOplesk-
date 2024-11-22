import React from "react";

const ViewsInput = ({
                        type,
                        name,
                        className,
                        value,
                        placeholder,
                        onChange
                    }) => {

        const handleValidation = (e) => {
            const { name, value } = e.target;

            if (name === "age") {
                if (/^\d*$/.test(value) && (value === "" || (value.length === 1 || value[0] !== "0") && (parseInt(value) > 0 && parseInt(value) <= 99))) {
                    onChange(e);
                } else if (value === "") {
                    onChange(e);
                }
            }
            else if ((name === "name" || name === "email") && value.length <= 50) {
                onChange(e);
            }
        };

        return (
            <input
                type={type}
                name={name}
                className={className}
                placeholder={placeholder}
                value={value}
                onChange={handleValidation}
                min="1"
                max="99"
                step="1"
            />
        );
    }
;

export default ViewsInput;
