import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tictactoe from '../Tictactoe'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>TIC TAC TOE GAME</h1>
      <Tictactoe/>
    </>
  )
}

export default App
