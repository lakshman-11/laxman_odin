import React  from "react";

const AddUser = props =>{
    //everytimes the button is clicked new states is to be handled so this function is made 
    //https://www.taniarascia.com/getting-started-with-react/
    const addUserHandler=(event)=>{

        event.preventDefault();
    };
    //don't user addUserHandler() so pointer is used i.e addUserHandler
    return(
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text"/>
            <label htmlFor="age">Age(Years)</label>
            <input  id ="age" type="numeber"/>
            <button type="submit">Add User</button>
        </form>
    );
};
export default AddUser;