import React,{useState}  from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";

import classes from "./AddUser.module.css";
import ErrorModel from "../UI/ErrorMod";



const AddUser = (props) =>{
    //everytimes the button is clicked new states is to be handled so this function is made 
    //https://www.taniarascia.com/getting-started-with-react/

    const [enteredUsername,setEnteredUsername]=useState(''); 
    const [enteredAge,setEnteredAge]=useState('');
    const [error,setError]=useState() /*initially value is undefined  so*/

    const addUserHandler=(event)=>{

        event.preventDefault();
        if(enteredUsername.trim().length==0 || enteredAge.trim().length==0){
            setError({
                title:'Invalid Input',
                message: 'Please enter the valid input (non-empty values !!! )'
            });
            return;
        }
        if(+enteredAge <1){
            setError({
                title:'Invalid Age',
                message:'Plz enter valid age (>0) '
            });
            return;
        }
        // console.log(enteredUsername,enteredAge);
        props.onAddUser(enteredUsername,enteredAge);
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

    const errorHandler =() =>{
        setError(null);
    };

    return(
        <div>
            {error && <ErrorModel title={error.title} message={error.message} onErrorHandler={errorHandler}/>}
        <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler}/>
            <label htmlFor="age">Age(Years)</label>
            <input  id ="age" type="numeber"  value={enteredAge} onChange={ageChangeHandler}/>
            <Button type="submit">Add User</Button>
        </form>
        </Card>
        </div>
        );
};
export default AddUser;