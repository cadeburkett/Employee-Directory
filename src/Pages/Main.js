import React, {useEffect, useState} from "react";
import API from "../Utils/API";
import EmployeeInfo from "../Components/EmployeeInfo"

function ShowEmployees() {
    const [state, setState] = useState({})
    useEffect(() => {
        API.getEmployee()
        .then( res => {
            console.log(res.data.results)
            setState(
                {users: res.data.results}
            )
        })

    })

    return (
        <div>
            Employee Directory

            return(
                <EmployeeInfo></EmployeeInfo>
            )

        </div>
    )
}

export default ShowEmployees