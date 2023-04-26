

function Add()
{
    return (
        <section>
            <ul>
                <li>ABC - Student</li>
                <li>PQR - Professional</li>
                <li>LMN - Student</li>
            </ul>
        </section>
    );
}

function handleClick(e)
{   
    alert('Clicked!!!');
}

function Todo() {

    return (

        <div align="center">

            <h1> List</h1>
            <Add />
            <button onClick={e=>
                alert('Start')
            } >Prev</button>

            <br/>

            <button onClick={handleClick}>Next</button> 

        </div>
    );
}

export default Todo;