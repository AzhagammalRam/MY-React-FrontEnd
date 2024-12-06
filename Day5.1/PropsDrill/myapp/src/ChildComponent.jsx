import React from 'react'

function ChildComponent(props) {
    const sendDatatoParent = () =>{
        const data = "Data Received From Child";
        props.handledDataFromChild(data);
    }
  return (
    <>
    <h4>Child Component</h4>
    <button onClick={sendDatatoParent}>Click here to Data Transfer</button>
    </>
  )
}

export default ChildComponent