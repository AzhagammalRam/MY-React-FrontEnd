import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Ref from './Ref'
import Reducer from './Reducer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Ref></Ref>
      <Reducer></Reducer>
    </>
  )
}

export default App
