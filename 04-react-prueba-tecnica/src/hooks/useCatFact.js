import { useEffect, useState } from "react";
import { getRandomFact } from "../services/fact";

export function useCatFact() {
    const [fact, setFact] = useState();
    const refreshFact = () => {
      getRandomFact().then((newFact) => setFact(newFact));
    };
    useEffect(() => {
       refreshFact;
    }, []); // Cada vez que se renderiza el componente quiero que se ejecute este efecto
  
    return { fact, refreshFact }
  }
  