import React from 'react'
import { useRef } from 'react';
import { useState } from 'react'

function ClickGame() {

    const [clickCount, setClickCount] = useState(0);

    const timeRef = useRef(null);
    const clickCountRef = useRef(clickCount);

    clickCountRef.current = clickCount;

    const startGame = () => {
        setClickCount(0);

        if(timeRef.current){
            clearTimeout(timeRef.current);
        }

        timeRef.current = setTimeout(()=>{
            alert(`Game Over!!! Your Click count is: ${clickCountRef.current}`);
        },5000);
    }

    const handleClick =() => {
        setClickCount(clickCount+1);
    }

  return (
    <div>
        <h1>Click The Button </h1>
        <p>Click Count is: {clickCount}</p>
        <button onClick={handleClick}>Click Me!!</button>
        <button onClick={startGame}>Start Game</button>
    </div>
  )
}

export default ClickGame