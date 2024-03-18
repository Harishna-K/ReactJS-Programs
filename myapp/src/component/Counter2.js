import React from 'react';



function Counter2() {
  const { count, countHandler } = UseCounter();

  return (
    <div>
      This is a counter
      <h1>{count}</h1>
      <button onClick={countHandler}>Click to increment</button>
    </div>
  );
}

export default Counter2;
