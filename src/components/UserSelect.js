import React from 'react'

function UserSelect({userObj}) {
    console.log(userObj)
    return (
        <div>
            <label for="users">User Select</label>
            <select name="users" id="users">
                <option value={userObj}>{userObj}</option>
            </select>
        </div>
    )
}

export default UserSelect
