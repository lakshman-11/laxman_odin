import React from "react";
import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";

const ErrorModel = (props)=>{
    return(
        <div>
            <div className={classes.backdrop} onClick={props.onErrorHandler} />
            <Card className={classes.modal}>
            <header className={classes.header}>
                {/* used curly brackets for dynamic  */}
                <h2 >{props.title}</h2>

            </header>
            <div className={classes.content}>
                <p>{props.message}</p>
            </div>
            <footer className={classes.actions}>
                <Button onClick={props.onErrorHandler}>Okay</Button>
            </footer>

        </Card>
        </div>
        
    );

};


export default ErrorModel;