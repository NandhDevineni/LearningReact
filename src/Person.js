import React from 'react'



  const Persons=(props)=>{ 
    return( <div>
      <p onClick={props.click}>  {props.name} age is {props.age} </p>
  <input type='text' onChange={props.changed} />
   </div> ) 
  }

export default Persons