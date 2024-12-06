import React from 'react'
import Child from './Child.jsx'

function Parent() {
    const names = ['Dhanu', 'Yuvan', 'Madhu','Ammu'];
  return (
    <>
    <h3>Parent</h3>
    <ol>
        {names.map((name,index) => (<li>{name}</li>))}
    </ol>
    <Child names={names}/>
    </>

  )
}

export default Parent