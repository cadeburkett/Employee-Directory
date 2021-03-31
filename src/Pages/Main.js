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

    function sortAge() {
        const sortedEmployees = state.users.sort((current, next) => {
            const currentAge = current.dob.age
            const nextAge = next.dob.age
            return nextAge.diff(currentAge)
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
                <button onClick={sortAge}>Sort by Age</button>
            </div>
            {state.filterUsers.map(user => {
                return <EmployeeInfo user={user}></EmployeeInfo>
            })}
        </div>
    )
}

export default ShowEmployees;