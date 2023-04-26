import './index.css';
import axios from "axios";
import {useState, useEffect} from 'react';

const baseURL = "https://jsonplaceholder.typicode.com/posts";

export default function Display(){

    const [posts, setPosts] = useState([])

    const fetchData = () => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            // console.log(response.data);
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
        {posts.length > 0 && (
            <div >
            {posts.map(post => (
                <div key={post.id}>{post.title}</div>
            ))}
            </div>
        )}
        </div>
    )
}


