import './index.css';
import axios from "axios";
import {useState, useEffect} from 'react';

const baseURL = "https://jsonplaceholder.typicode.com/posts";

export default function Display(){

    const [posts, setPosts] = useState([])

    const fetchData = () => {
        axios.get(baseURL)
        .then(response => {
            return response.data;
        })
        .then(data => {
            setPosts(data)
        })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            <h3>Post List:</h3>
            {posts.length > 0 && (
                <ul >
                    <p>
                        {posts.map(post => (
                            <li>{post.title}</li>
                        ))}
                    </p>
                </ul>
            )}
        </div>
    )
}


