import { createContext, useState } from "react";

const AnimalContext = createContext();

function AnimalProvider({ children }){
    const [AnimalSound, setAnimalSound] = useState("Meae!");

    return (
        <AnimalContext.Provider value={{ AnimalSound, setAnimalSound }} >
            { children }
        </AnimalContext.Provider>
    )
}

export {AnimalContext,AnimalProvider}