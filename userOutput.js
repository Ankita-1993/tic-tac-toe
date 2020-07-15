import React from 'react';
import './userInput.css';
const UserOutput =(props)=>{
    return (
        <div>
            <p>Following is employees details!</p>
            <p>My name is {props.name} and I am {props.age} years old.</p>
        </div>
    );
};
export default UserOutput;