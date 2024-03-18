import React from 'react';
const List = () => {
    const listitems=[
        {id:1, name:"A"},
        {id: 2, name:"B"},
        {id: 3, name:"C"},
        {id: 4, name:"D"},
        {id: 5, name:"E"},
        {id: 6, name:"F"}
        ];
  return (
    <div className='App'>
     <header className='App-heder'>
        <h1>REACTJS LIST AND KEYS</h1>
        <ul>
            {
                listitems.map(data=>(
                    <li>{data.id}</li>
                ))
            }
        </ul>
     </header>
    </div>
  );
}

export default List;
