import React from 'react'
import Grchild from './Grchild.jsx'

function Child(props) {
  return (
    <>
    <h4>Child List</h4>
    <ul>
        {props.names.map((name,index) => 
        <li key={index}>{name}</li>)}
    </ul>
    <Grchild names={props.names}/>
    </>
  )
}

export default Child