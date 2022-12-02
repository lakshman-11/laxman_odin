import React,{useState}  from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";

import classes from "./AddUser.module.css";



const AddUser = (props) =>{
    //everytimes the button is clicked new states is to be handled so this function is made 
    //https://www.taniarascia.com/getting-started-with-react/

    const [enteredUsername,setEnteredUsername]=useState(''); 
    const [enteredAge,setEnteredAge]=useState('');

    const addUserHandler=(event)=>{

        event.preventDefault();
        if(enteredUsername.trim().length==0 || enteredAge.trim().length==0){
            return;
        }
        if(+enteredAge <1){
            return;
        }
        console.log(enteredUsername,enteredAge);
        setEnteredUsername('')
        setEnteredAge('');
    };
    //don't user addUserHandler() so pointer is used i.e addUserHandler
    const usernameChangeHandler = (event)=>{
        setEnteredUsername(event.target.value); 
    };
    const ageChangeHandler =(event)=>{
        setEnteredAge(event.target.value);
        
    };
    return(
        <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler}/>
            <label htmlFor="age">Age(Years)</label>
            <input  id ="age" type="numeber"  value={enteredAge} onChange={ageChangeHandler}/>
            <Button type="submit">Add User</Button>
        </form>
        </Card>
        );
};
export default AddUser;