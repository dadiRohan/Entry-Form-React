import './index.css';
import { useState } from 'react';

export default function MyForm(){

    const [fullName, setFullName] = useState('');

    function handleSubmit(e){
        e.preventDefault();

        const form = e.target;
        const formdata = new FormData(form);

        const formJson = Object.fromEntries(formdata.entries());
        console.log(formJson);
    }
    
    return (
        <form method="post" onSubmit={handleSubmit} align="center">
            <b>FeedBack Form</b>
            <br/>
            <label>Full Name</label>
            <input name="myName" value={fullName} onChange={e=>setFullName(e.target.value)}/>
            <br/>
            <i>{fullName}</i>
            <br/>
            <label>Category:</label>   
            <label>Student<input type="radio" name="myRadio" value="student"/></label>
            <label>Professional<input type="radio" name="myRadio" value="professional"/></label>
            <br/>
            <br/>

            <button type="reset">Reset form</button>
            <button type="submit">Submit form</button>
        </form>
    )
}


