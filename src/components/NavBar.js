import React from 'react'
import Search from './Search'
import UserSelect from './UserSelect.js'

function NavBar({userArray, updateActiveUser}) {
//     console.log(userArray)
//    const username = userArray.map((user) => user.username)
    // return <UserSelect key={user.id} name={user.name}/>})
    // console.log(username)
    return (
        <div>
            <Search />
            <UserSelect userArray={userArray} updateActiveUser={updateActiveUser}/>
        </div>
    )
}

export default NavBar
