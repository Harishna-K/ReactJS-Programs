// import React from 'react';
// import Register from './components/Register';
// import Login from './components/Login';

// const App = () => {
//   return (
//     <div>
//       <Register />
//       <Login />
//     </div>
//   );
// };

// export default App;


import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Atslog from './components/Atslog'
import Register from './components/Register';
const App = () => {
  return (
    <div>
      <BrowserRouter>
       <Routes>
         <Route path="/" element={<Atslog/>}></Route>
         <Route path="/Register" element={<Register/>}/>
         </Routes>
      
    </BrowserRouter>
   
    </div>
  )
}
export default App
