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

    function sortName() {
        const sortedEmployees = state.users.sort((current, next) => {
            if (current.name.last < next.name.last) {
                return -1
            } else if (current.name.last > next.name.last) {
                return 1
            } else {
                return 0
            }
        })
        setState(
            {
                ...state,
                filterUsers: sortedEmployees
            }
        )
    }

    function filterName(event) {
        const filteredNames = state.users.filter((user) => {
            const userName = user.name.first + " " + user.name.last
                return userName.toLowerCase().includes(event.target.value.toLowerCase())
        })
        setState(
            {
                ...state,
                filterUsers: filteredNames
            }
        )
    }

    return (
        <div>
            <h1>Employee Directory</h1>
            <div>
                <input onChange={filterName}></input>
                <button onClick={sortName}>Sort by Employee's Last Name</button>
            </div>
            {state.filterUsers.map(user => {
                return <EmployeeInfo user={user}></EmployeeInfo>
            })}
        </div>
    )
}

export default ShowEmployees;