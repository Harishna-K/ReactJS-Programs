import React, { useCallback, useState } from 'react';

const Counter = () => {
  
  const [count, setCount] = useState(0);
  const[increase,setIncrease]=useState(0);

  const handleIncrement=() => {
    setCount(count + 1);
    console.log("WITHOUT:",count);
  };
  const Increment=useCallback(() => {
    setIncrease(increase+5);
    console.log("WITH:",increase);
  },[increase]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <p>Increase:{increase}</p>
      <button onClick={Increment}>ADD 5</button>
    </div>
  );
};

export default Counter;
