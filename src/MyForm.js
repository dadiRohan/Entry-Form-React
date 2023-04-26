import axios from "axios";
import React from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

export default function MyForm() {
    
  const [valuetitle,setTitle] = React.useState('');   
  const [valuebody,setBody]   = React.useState('');
    

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formdata = new FormData(form);
    const formJson = Object.fromEntries(formdata.entries());

    axios.post(baseURL, {
        title: formJson.title,
        body: formJson.body
      })
      .then((response) => {
        console.log(response.data);
      });
  }


  return (
        <form method="post" onSubmit={handleSubmit}>
            <label>Title:</label>
            <input name="title" value={valuetitle} onChange={e=>setTitle(e.target.value)}/>    
            <label>Description:</label>
            <input name="body" value={valuebody} onChange={e=>setBody(e.target.value)}/>
            
        <button type="submit">Create Post</button>
      </form>
    );
}