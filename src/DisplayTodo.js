import {useState,useEffect} from 'react';
import axios from 'axios';

const baseURL = "https://jsonplaceholder.typicode.com/todos";

function DisplayTodo()
{
    const [todos, SetTodos] = useState([]);

    const fetchData = () => {
        axios.get(baseURL)
            .then(response =>{
                // console.log(response.data)
                return response.data
            })
            .then(data=>{
                // console.log(data)
                SetTodos(data)
            });
    }

    useEffect(()=>{
        fetchData()
    },[])

    return (
        <>
            <h3>View Todo List:</h3>
            <ol>

                {
                    todos.map(todo => (
                        <li>
                            {todo.title}
                        </li>
                    ))
                }
            </ol>
        </>
    )
}

export default DisplayTodo;