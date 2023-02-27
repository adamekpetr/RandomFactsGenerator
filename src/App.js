import RandomButton from "./components/RandomButton";
import RandomFact from "./components/RandomFact";
import { useState } from "react";
import dataArray from "./data";

const App = () => {
  const [number, setNumber] = useState();
  const handleClick = () => {
    const randomNumber = Math.floor(Math.random() * 1000);
    setNumber(randomNumber);
  };

  return (<>
    <div className="divize">
      <RandomButton clickRB={handleClick} />
      
    </div>
    <div className="divize">
    <RandomFact  fact={dataArray[number]} />
    </div>
    </>
  );
};

export default App;
