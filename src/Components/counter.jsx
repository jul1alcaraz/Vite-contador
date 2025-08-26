import { useState } from "react";
import "./counter.css"; 

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleCount = (operator) => {
    if (operator === "restar" && count > 0) {
      setCount(count - 1);
    }
    if (operator === "sumar") {
      setCount(count + 1);
    }
  };

  return (
    <div className="contador">
      <h1>Contador</h1> 
      <div className="buttons">
        <button onClick={() => handleCount("restar")}> - </button>
        <p>{count}</p>
        <button onClick={() => handleCount("sumar")}> + </button> 
      </div>
    </div>
  );
};

export default Counter;
