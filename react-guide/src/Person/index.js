import React from 'react';
import './styles.css';

const Person = (props) => {
  //{ props.Children }  tudo que esta dentro de <Person> aiaosan </Person>0

  return (
    <div className='Person'>
          <p onClick={props.click}>
              I'm {props.name} and I am {props.age} years old
          </p>    
          <p>
            {props.children}
          </p>
          <input type="text" onChange={props.updatePersonName} value={props.name}/>
      </div>
    
  );
}

export default Person;