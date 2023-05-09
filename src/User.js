import React from 'react';
import AddUser from './AddUser';
import DisplayUser from './DisplayUser';

function User()
{
    return (
        <>
           <h4>User Data</h4>
           <AddUser/>
            <DisplayUser/>
        </>
    )
}

export default User;