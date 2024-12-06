import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Parent from './Parent.jsx'
import ParentComponent from './ParentComponent.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Parent />
      <ParentComponent />
    </>
  )
}

export default App
