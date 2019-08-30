import React, {Component}from 'react';
import './App.css';
import Person from './Person';


class App extends Component {  
  state={
    persons:[
      {
        id: 'asda',
        name:'Max',
        age:10,        
      },
      {
        id: 'gdf',
        name:'Mix',
        age:29,
        desc:'outros teste'
      },
      {
        id: 'gdfgd',
        name:'Mux',
        age:14,
        desc:'teste 1'
      }
    ],
    otafumiga:'outra coisa',
    showPersons:true,

  }

  updatePersonName = (event,id) => {

    const {persons} = this.state;    
    
    const pI = persons.findIndex(p => { return (p.id === id) });
    
    const person = { ...persons[pI]};    
    person.name = event.target.value;

    persons[pI] = person;
    
    this.setState({
      persons:persons
    });
  }
  
  togglePersonsHandler = () =>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons:!doesShow});
  }

  deletePersonHandler = (pIndex) => {
    const { persons } = this.state;
    persons.splice(pIndex,1);
    this.setState({persons:persons});
  } 

  render () {
    const {persons} = this.state;
    
    const style={
      backgroundColor:'green',
      color:'white',
      font:'inherit',
      border:'1px dotted black',
      padding:'20px',
      marginTop:'10px',
      cursor:'pointer',
    };
    
    let jsxPersons = null;

    if(this.state.showPersons){
      jsxPersons = (
        <div >            
          {persons.map( (p,index) => {          
            return (
              <Person
               key={p.id}
               name={p.name} 
               age={p.age} 
               click={()=>this.deletePersonHandler(index)} 
               updatePersonName={(event)=>this.updatePersonName(event,p.id)}>
                  {p.desc}
              </Person>
            );          
          })} 
        </div>           
      );

      style.backgroundColor = 'red';      
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }

    if (this.state.persons.length <= 1) {
      classes.push('bold');
      classes.push('underLine');      
    }
         
    return (            
        <div className="App" >
          <h1 className={classes.join(' ')}>Hello, I'm a React App</h1>

          <button
            style={style}
            onClick={this.togglePersonsHandler}>
            Toggle persons
          </button>
          {jsxPersons}
        </div>                            
    );      
  }
}

export default App;
