import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    console.log("Effect", { enabled });
    const handleMove = (event) => {
      const { clientX, clientY } = event;
      console.log("handleMove ", { clientX, clientY });
      setPosition({ x: clientX, y: clientY });
    };

    if (enabled) {
      window.addEventListener("pointermove", handleMove);
    }

    return () => {
      window.removeEventListener('pointermove', handleMove);
    }
  }, [enabled]);

  // [] --> solo se ejecuta una vez cuando se monta el componente
  // [enabled] --> se ejecuta cuando cambia enabled y cuando se monta el componente
  // undefined --> se ejecuta cada vez que se renderiza el componente
  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled);
    return () => {
      document.body.classList.remove('no-cursor');
    }
  }, [enabled]);

  return (
    <main>
      <div
        style={{
          position: "absolute",
          backgroundColor: "#09f",
          borderRadius: "50%",
          opacity: 0.8,
          pointerEvents: "none",
          left: -20,
          top: -20,
          width: 40,
          height: 40,
          transform: `translate(${position.x}px, ${position.y}px`,
        }}
      />
      <h2>Proyecto 3</h2>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? "Desactivar" : "Activar"}
      </button>
    </main>
  );
}

export default App;
