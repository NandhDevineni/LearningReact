import React, { Component } from 'react';
import './App.css';
import Persons from './Person'

class App extends Component {
  constructor() {
    super()
    this.state = {
      persons: [
        { name: 'jack', age: 23 },
        { name: 'rayn', age: 43 },
        {name:'john' , age:34}


      ],
      showList:false
         
    }
  }
   buttonPressed=(newName)=>{
                this.setState({
                   persons: [
        { name: newName, age: 23 , id:'grtger'},
        { name: 'rayn', age: 45 ,id:'gwehj'},
        {name: 'wick', age:55 , id:'tgwkomo'}

      ]
                })
          }
          nameChanged=(event)=>{
            this.setState({
            persons: [
        { name: 'jack', age: 23 },
        { name: event.target.value, age: 43 },
        {name:'john' , age:34}

      ]
      })
          }
          toggleButtonHandler =()=>{
              const doesShow = this.state.showList
              this.setState({
                showList: !doesShow
              })
          }
          deletePerson = (index)=>{
             // const persons=this.state.persons
             const persons = [...this.state.persons]
              persons.splice(index,1)
              this.setState({persons : persons})
          }


  render() { 
    return (
      <div className="App">
        <button onClick={this.toggleButtonHandler}>change name</button>
      { this.state.showList === true ?
        <div> 
       { this.state.persons.map((person, index)=> {
        return <Persons name={person.name} age={person.age} key={person.id}
        click={()=>this.deletePerson(index) }></Persons>
      })  }
     { // <Persons name={this.state.persons[0].name} age={this.state.persons[0].age}>
      // </Persons>
      // <Persons
      //   name={this.state.persons[1].name}
      //   age={this.state.persons[1].age}
      //   click={this.buttonPressed.bind(this, 'nandh')}
      //   changed={ this.nameChanged } /> 
        
      //   <Persons name={this.state.persons[2].name} age={this.state.persons[2].age}>
      // </Persons>
    }
      </div> : null
}
      </div>
      );
  }
}
export default App;
