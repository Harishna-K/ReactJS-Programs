import React, { useState } from 'react';

const Counter = () => {
    const[count,setCount]=useState(0);
    const add=()=>{
        for(let i=0;i<5;i++){
            setCount(prevstate=>prevstate + 1)
        }
    }
  return (
    <div>
      <button onClick={()=>setCount(count+1)}>click me!</button>
      <p>Current value of count is {count}</p>
      <button onClick={()=>add()}>click me to add 5</button>
    </div>
  );
}

export default Counter;
