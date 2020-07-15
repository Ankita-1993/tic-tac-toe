import React, { Component } from 'react';
// import './userInput.css';
import UserOutput from './userOutput';
class UserInput extends Component {
    // constructor(props){
    //     super(props)
    state = {
        emp: [
            {username: 'Ankita', age: 26},
            {username: 'Sony', age: 25}
        ]
    };
        // this.changeHandler = this.changeHandler.bind(this);
        // this.swichHandler = this.swichHandler.bind(this);
    
    changeHandler=()=>{
        this.setState({
            emp: [
                {username: 'ASoni', age: 26},
                {username: 'Sony', age: 24}
            ]
        });
    }
    render() {
        const style = {
            backgroundColor: 'red',
            color: 'blue',
            padding: '8px',
            curser: 'pointer'
        } 
        return (
            <div className= 'userInput'>
                <h1>This is employee details!</h1>
                <p>You may find one of them.</p>
                <button style={style} onClick={this.changeHandler}> button </button>
                <UserOutput name= {this.state.emp[0].username} age={this.state.emp[0].age}/>
                <UserOutput name= {this.state.emp[1].username} age={this.state.emp[1].age}/>
            </div>
        );
    }
}
 
export default UserInput;