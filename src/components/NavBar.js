import React from 'react'
import Search from './Search'
import UserSelect from './UserSelect.js'

function NavBar({userArray}) {
    console.log(userArray)
    const userObj = userArray.map((user) => {
    return <UserSelect key={user.id} userObj={user}/>})
    return (
        <div>
            <Search />
            <UserSelect />
        </div>
    )
}

export default NavBar
