import React, {useContext} from 'react'
import { AnimalContext } from './AnimalContext';

function AnimalSound() {
    const { AnimalSound } = useContext(AnimalContext);
    
  return (
    <div>Animal Sound is {AnimalSound}</div>
  )
}

export default AnimalSound