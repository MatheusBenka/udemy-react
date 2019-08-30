import React, { Component } from 'react';

class CharComponent extends Component {
    
  render() {
    const styleChar = {
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        margin: '16px',
        border: '1px solid black',
        cursor:'crosshair'
    };
    const letter = this.props.letter;
    return (
        <div className='CharComponent' onClick={this.props.click} style={styleChar}>
            {letter}
        </div>
    );
  }
}


export default CharComponent;