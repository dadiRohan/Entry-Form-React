import {useState} from 'react';
import axios from 'axios';

const baseURL = "https://jsonplaceholder.typicode.com/todos";

function AddTodo()
{       
    const [todo,setTodo] = useState('');

    function handleTodo(e){
        e.preventDefault();

        const form = e.target;
        const formdata = new FormData(form);
        const formJson = Object.fromEntries(formdata.entries());

        axios.post(baseURL,
            {
                title : formJson.title
            }).then(response=>{
                // console.log(response.data)
                if(response.data.title)
                {
                    alert(response.data.title+' Added')
                }else{

                    alert('No data added');
                }
            })
    }

    return (
        <>
            <h2>Add Todo</h2>
            <form action="post" onSubmit={handleTodo}>
                <label>Title</label>
                <input name="title" value={todo} onChange={e=> setTodo(e.target.value)}/>
                <button type="submit">Add</button>
            </form>
        </>
    )
}

export default AddTodo;