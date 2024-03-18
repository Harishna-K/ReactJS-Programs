import { useState } from 'react';
function UseCot() {
  const [count, setCount] = useState(0);

  const countHandler = () => {
    setCount(count + 1);
  };

  return {
    count,
    countHandler,
  };
}

export default UseCot;