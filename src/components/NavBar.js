import React from 'react'
import Search from './Search'
import UserSelect from './UserSelect.js'

function NavBar({userArray, updateActiveUser, searchTerm, onSearchChange}) {
    return (
        <div>
            <UserSelect userArray={userArray} updateActiveUser={updateActiveUser}/>
            <Search searchTerm={searchTerm} onSearchChange={onSearchChange}/>
        </div>
    )
}

export default NavBar
