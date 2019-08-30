import React, {Component} from 'react';
import './style.css';

class UserInput extends Component
{
    render(){
        return (
            <input className='userIn' type='text' onChange={this.props.updateUserName} value={this.props.username}/>
        );
    }
}

export default UserInput;