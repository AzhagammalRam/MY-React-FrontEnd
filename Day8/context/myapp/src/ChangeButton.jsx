import React,{useContext} from 'react'
import { AnimalContext } from './AnimalContext';

function ChangeButton() {
    const { setAnimalSound } = useContext(AnimalContext);

    const changeSound = (newSound) => {
      setAnimalSound(newSound);
    }
  return (
    <button onClick={ () => changeSound("Bow")}>Change Button</button>
  )
}

export default ChangeButton