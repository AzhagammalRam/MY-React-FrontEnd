import React, { useState } from 'react'
import Comments from './Comments.jsx'
import Like from './Like.jsx'

function Post(props) {
  // let flag = true;
  const[flag,setFlag] = useState(true);
  const handleClickAdd = () =>{
    setFlag(false);
  }
  const handleClickRemove = () =>{
    setFlag(true);
  }

  const [count,setCount] = useState(0);
  const handleClickCount = () => {
    setCount(count + 1);
  }

  return (
    <>
    <h5>Count : {count}</h5>
    {count<5 ? <button onClick={handleClickCount}>Click Me</button> : <h6>Button Removed!!!</h6>}
    <h1>{props.name}</h1>
    {flag ? <button onClick={handleClickAdd}>Add</button> : <button onClick={handleClickRemove}>Remove</button> }
    <Comments/>
    <Like/>
    </>
  )
}

export default Post