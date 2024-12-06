import React from 'react'
import { useParams } from 'react-router-dom'

function About() {
    const { name } = useParams();
  return (
    <>
    <h1>About</h1>
    <h4>Welcome {name} !!</h4>
    </>
  )
}

export default About