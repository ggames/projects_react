import { Otro } from "./src/Components/Otro";
import { useCatFact } from "./src/hooks/useCatFact";
import { useCatImage } from "./src/hooks/useCatImage";


export function App() {
  const { fact, refreshFact} = useCatFact()
  const { imageUrl } = useCatImage({ fact });
  // no puedes usar React Query , SWR , axios , apollo
  // puedes usar fetch

  const handleClick = async () => {
      refreshFact()
  };

  //  useCatImage(fact)

  return (
    <main>
      <h1>App de gatitos</h1>
      <button onClick={handleClick}>Get new fact</button>
      {fact && <p>{fact}</p>}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={`Image extracted using the first three words for ${fact}`}
        />
        
      )}
      <Otro/>
    </main>
  );
}
