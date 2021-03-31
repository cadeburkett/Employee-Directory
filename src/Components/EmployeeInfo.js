import React from "react";
import API from "../Utils/API";

function EmployeeInfo(props) {
    return (
        <div>
            <p>{props.user.name.last}</p>
            <p>{props.user.email}</p>
        </div>
    )
}

export default EmployeeInfo