import {useState} from 'react';
import axios from 'axios';

const baseURL = "https://jsonplaceholder.typicode.com/users";

function AddUser()
{   
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    function handleSend(e){
        e.preventDefault();

        const form = e.target;
        const formdata = new FormData(form);
        const formJson = Object.fromEntries(formdata.entries());
        
        axios.post(baseURL,{
            name: formJson.username,
            phone: formJson.phone,
            email: formJson.email
        }).then((response)=>{
            if(response.data.id){
                alert(response.data.name +' Added Successfully')
            }else{
                alert('Not able to Add User')
            }
        })
   }

    return (
        <>  
            <h2>Add User</h2>
            <form action="post" onSubmit={handleSend}>
                <label>Name:</label><input name="username" value={name} onChange={e=> setName(e.target.value)} />
                <label>Email:</label><input name="email" value={email} onChange={e=> setEmail(e.target.value)} />
                <label>Phone:</label><input name="phone" value={phone} onChange={e=> setPhone(e.target.value)} />
                <button type="submit">Add User</button>
            </form>
        </>
    )
}

export default AddUser;