import {useState,useEffect} from 'react';
import axios from 'axios';

const baseURL = "https://jsonplaceholder.typicode.com/users";

function DisplayUser(){

    const [users, SetUsers] = useState([]);

    const fetchUser = () => {
        axios.get(baseURL)
        .then(response=>{
            // console.log(response.data)
            return response.data;
        })
        .then(data=>{
            SetUsers(data);
        });
    }

    useEffect(()=>{
        fetchUser()
    },[])


    return (
        <>
            <h3>View Users :</h3>
            <ol>
                {users.map(user => (
                        <li>
                            <i>{user.name}</i>
                            ({user.email})
                        </li>
                    ))}
            </ol>
        </>
    )
}

export default DisplayUser;