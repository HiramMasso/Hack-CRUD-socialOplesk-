import React from "react";

const ViewsButton = ({
                         className,
                         onClick,
                         viewBox,
                         pathD,
                         pathD1,
                         pathD2,
                         clipRule,
                         fillRule
                     }) => {

    return (
        <button className={className} onClick={onClick}>
            <svg className="bin" viewBox={viewBox}>
                <path d={pathD}></path>
                <path d={pathD1}></path>
                <path d={pathD2} clipRule={clipRule} fillRule={fillRule}></path>
            </svg>
        </button>
    );
};
export default ViewsButton;
