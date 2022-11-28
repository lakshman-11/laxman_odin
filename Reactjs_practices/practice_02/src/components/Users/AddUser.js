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
    };
    //don't user addUserHandler() so pointer is used i.e addUserHandler
    const usernameChangeHandler = (event)=>{
        setEnteredUsername(event.target.value); 
    };
    const ageChangeHandler =(event)=>{
        setEnteredAge(event.target.value);
        console.log(enteredUsername,enteredAge);
    };
    return(
        <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" onChange={usernameChangeHandler}/>
            <label htmlFor="age">Age(Years)</label>
            <input  id ="age" type="numeber" onChange={ageChangeHandler}/>
            <Button type="submit">Add User</Button>
        </form>
        </Card>
        );
};
export default AddUser;