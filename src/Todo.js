import React from 'react';
import AddTodo from './AddTodo';
import DisplayTodo from './DisplayTodo';
function Todo()
{
    return (
        <div>
            <h4>Todo Data</h4>
            <AddTodo/>
            <DisplayTodo/>
        </div>    
    )
}

export default Todo;