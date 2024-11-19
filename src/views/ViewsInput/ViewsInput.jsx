import React from "react";

const ViewsInput = ({
                        type,
                        name,
                        className,
                        value,
                        placeholder,
                        onChange
                    }) => {

        const IntegerValidation = (e) => {
            const {name, value} = e.target;
            if (name === "age") {
                if (/^\d*$/.test(value) && (value === "" || (parseInt(value) >= 0 && parseInt(value) <= 99))) {
                    onChange(e);
                } else if (value === "") {
                    onChange(e);
                }
            } else {
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
                onChange={IntegerValidation}
                min="0"
                max="99"
                step="1"
            />
        );
    }
;

export default ViewsInput;
