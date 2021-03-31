import React from "react";
// import API from "../Utils/API";
import "./EmployeeInfo.css"

function EmployeeInfo(props) {
    return (
        <div className="employeeInfoRow">
            <img className="employeePhoto" src={props.user.picture.thumbnail}/>
            <span className="employeeName">{props.user.name.first} {props.user.name.last}</span>
            <span className="employeeEmail">{props.user.email}</span>
            <span className="employeeCell">{props.user.cell}</span>
            <span className="employeeLocation">{props.user.location.city}, {props.user.location.country}</span>
            <span className="employeeAge">{props.user.dob.age}</span>
        </div>
    )
}

export default EmployeeInfo;