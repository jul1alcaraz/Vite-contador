import { useState } from "react";
import "./counter.css"; 

const Counter =()=> {
    const [count, setCount]= useState(0);

    return (
        <div className="contador">
            <h1 >Contador</h1> 
            <div className="buttons">
            <button onClick={()=> setCount(count -1)}> - </button>
            
            <p>{count}</p>
            
            <button onClick={()=> setCount(count + 1)}> + </button> 
            </div>
        </div>
    )
};
export default Counter;