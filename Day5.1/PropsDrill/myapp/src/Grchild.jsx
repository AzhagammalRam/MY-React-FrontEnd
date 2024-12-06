import React from 'react'

function Grchild(props) {
  return (
    <>
    <h4>Grand Child</h4>
    {props.names.join(', ')}
    </>
  )
}

export default Grchild