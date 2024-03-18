import React from 'react';

function HandleChange(event){
    // console.log("DATA CHANGE");
    console.log(event.target.placeholder);

  return (
    <div className='container'>
        <h1>Hello</h1>
        <input onChange={HandleChange}
      type='text' placeholder='Enter your Name'/>
      <button>submit</button>
    </div>
  );

  }
export default HandleChange;
