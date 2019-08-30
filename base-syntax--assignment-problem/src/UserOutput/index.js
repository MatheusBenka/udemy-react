import React, {Component} from 'react';
import './style.css';

class UserOutput extends Component {
    
  render() {
    return (
        <div className='userOut'>
            <p>Test one, username:{this.props.username}</p>
            <p>Test two, username:{this.props.username}</p>                      
        </div>

    );
  }
}

export default UserOutput;