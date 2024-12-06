import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Post from './Post.jsx'
import MountClass from './MountClass.jsx'
import Test from './Test.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <Post name="Post 1"/>
    <Post name="Post 2"/>
    <Post name="Post 3"/>
    <Post name="Post 4"/>
    
    <MountClass/>
    <Test />
  </StrictMode>,
)

