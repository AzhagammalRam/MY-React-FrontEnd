import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [data, setData] = useState([]);
  const[loading,setloading] =useState(false);
  const[error,seterror] =useState(null);

  const apiUrl = "http://localhost:4000/User";
  return (
    <>
      
      
    </>
  )
}

export default App
