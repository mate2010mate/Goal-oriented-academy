import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { animals } from "./animals";

const AnimalFacts = ({ displayFact }) => (
  <div className="animals">
    {Object.keys(animals).map((animal) => (
      <img
        key={animal}
        className="animal"
        alt={animal}
        src={animals[animal].image}
        aria-label={animal}
        role="button"
        onClick={() => displayFact(animal)}
        style={{ width: "120px", cursor: "pointer", margin: "5px" }}
      />
    ))}
  </div>
);

const App = () => {
  const [fact, setFact] = useState(null);

  const displayFact = (animal) => {
    const randomIndex = Math.floor(Math.random() * animals[animal].facts.length);
    setFact(animals[animal].facts[randomIndex]);
  };

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif" }}>
      <h1>Click an animal for a fun fact!</h1>
      <img
        className="background"
        alt="ocean"
        src="/images/ocean.jpg"
        style={{ width: "100%", height: "auto" }}
      />
      <AnimalFacts displayFact={displayFact} />
      {fact && <p style={{ fontSize: "18px", fontWeight: "bold", marginTop: "20px" }}>{fact}</p>}
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

export default App
