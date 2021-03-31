import React from "react";
// import API from "../Utils/API";

function EmployeeInfo(props) {
    return (
        <div>
            <img src={props.user.picture.thumbnail}/>
            <p>{props.user.name.first} {props.user.name.last}</p>
            <p>{props.user.email}</p>
        </div>
    )
}

export default EmployeeInfo;