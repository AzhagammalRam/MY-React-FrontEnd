import React, { useState } from 'react'
import ChildComponent from './ChildComponent'

function ParentComponent() {
    const [receivedData, setReceivedData] = useState('');

    const handledDataFromChild = (data) =>{
        setReceivedData(data);
    }
  return (
    <>
    <h3>Parent Component</h3>
    <p>Received Child Data : {receivedData}</p>

    <ChildComponent handledDataFromChild ={handledDataFromChild} />
    </>
  )
}

export default ParentComponent