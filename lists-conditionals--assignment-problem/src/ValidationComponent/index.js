import React, { Component } from 'react';

// import { Container } from './styles';

class ValidationComponent extends Component {

  render() {
    let lengthText = null;
    let message = null;    
    
    if(this.props.lengthInput >=5)
    {
        message = 'Text long enough'; 
    }
    else
    {
        message = 'Text too short';
    }
    lengthText = (<p>{message}</p>);

    return (
        <div>
            {lengthText}
        </div>

    );
  }
}

export default ValidationComponent;