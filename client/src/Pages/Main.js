import React, {useEffect, useState} from "react";
import API from "../Utils/API";

function ShowEmployees() {
    // const [state, setState] = useState({})
    useEffect(() => {
        API.getEmployee()
        .then( res => {
            // setState()
        })

    })

    return (
        <div>
            Employee Directory

        </div>
    )
}

export default ShowEmployees