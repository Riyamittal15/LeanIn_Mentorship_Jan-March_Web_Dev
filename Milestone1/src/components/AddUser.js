import { useState } from 'react'
import Card from "./Card";
import "./AddUser.css"

const AddUser = (props) => {

const[enteredUser,setEnteredUser]=useState('');
const[enteredPhn,setEnteredPhn]=useState('');

    const addHandler =(event)=> {
        
        event.preventDefault();
        if(enteredUser.trim().length===0||enteredPhn.trim().length===0){
            alert("Enter a VALID username/Phn!!!")
            return;
        }

        props.onAddUser(enteredUser,enteredPhn);
        setEnteredUser('');
        setEnteredPhn('');
    }

    const userChangedHandler=(event)=>{
        setEnteredUser(event.target.value); 
    }
    const phnChangedHandler=(event)=>{
        setEnteredPhn(event.target.value); 
    }


    return(
        <Card>
            <form onSubmit={addHandler}>
                <div>
                <label htmlFor="username" className="tt">Name</label>
                <input type="text" autoComplete="off" 
                    value={enteredUser}
                    onChange={userChangedHandler}
                    name="username" id="username"/>
                </div>

                <div>
                <label htmlFor="phone" className="tt">Phone</label>
                <input type="text" autoComplete="off" 
                    value={enteredPhn}
                    onChange={phnChangedHandler}
                    name="phone" id="phone"/>
                </div>

                <button className="btn" type="submit">Submit</button>
            </form>
        </Card>
    )
}

export default AddUser;