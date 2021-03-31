import React, {useEffect, useState} from "react";
import API from "../Utils/API";
import EmployeeInfo from "../Components/EmployeeInfo"

function ShowEmployees() {
    const [state, setState] = useState({ users: [], filterUsers: [] })
    useEffect(() => {
        API.getEmployee().then( res => {
            console.log(res.data.results)
            setState(
                {users: res.data.results, filterUsers: res.data.results}
            )
        })

    }, [])

    return (
        <div>
            <h1>Employee Directory</h1>
            {state.filterUsers.map(user => {
                return <EmployeeInfo user={user}></EmployeeInfo>
            })}
        </div>
    )
}

export default ShowEmployees;