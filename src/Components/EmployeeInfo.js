import React from "react";
// import API from "../Utils/API";

function EmployeeInfo(props) {
    return (
        <div className="employeeInfoRow">
            <img src={props.user.picture.thumbnail}/>
            <p>{props.user.name.first} {props.user.name.last}</p>
            <p>{props.user.email}</p>
            <p>{props.user.cell}</p>
            <p>{props.user.location.city} {props.user.location.country}</p>
            <p>{props.user.dob.age}</p>
        </div>
    )
}

export default EmployeeInfo;