import React from 'react'

function UserSelect({userArray, updateActiveUser}) {
const user = userArray.map(user => <option value={user.id}>{user.username}</option>)
function handleChangeUser(e) {
   updateActiveUser(e.target.value)
    // updateActiveUser(user)
}

    return (
        <div>
            <label for="users">User Select</label>
            <select name="users" id="users" onChange={handleChangeUser}>
            <option value="select_user">Select User</option>
                {user}
            </select>
        </div>
    )
}

export default UserSelect
