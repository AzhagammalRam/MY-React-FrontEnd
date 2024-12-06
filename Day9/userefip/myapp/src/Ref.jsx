import React, { useRef, useState } from 'react'

function Ref() {
    // const[count,setCount] = useState(0);
    const countRef = useRef(0);

    function handleClick(){
        // setCount(count + 1);
        countRef.current++;
        // console.log(count); // uncomment these lines to compare useState Vs useRef
        console.log(countRef.current);
    }
  return (
    <>
    <h1>Use Ref Demo</h1>
    {/* <p>State Value {count}</p> */}
    <p>Ref Value {countRef.current}</p>
    <button onClick={handleClick}>Increment</button>
    </>
  )
}

export default Ref