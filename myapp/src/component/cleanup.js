import React, { useEffect, useState } from 'react';
const Cleanup = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
       const fetchData = async () => {
      try {
               const result = await fetch('https://api.example.com/data');
        const data = await result.json();
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
 fetchData();
    return () => {
         console.log('Component will unmount or effect will re-run');
    };
  }, []); 
  return (
    <div>
      {/* Render your component based on the data */}
      {data && <div>{data}</div>}
    </div>
  );
};
export default Cleanup;




