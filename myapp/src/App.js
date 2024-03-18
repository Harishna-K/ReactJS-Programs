import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Homen from "./component/homen.js";
import Login from './component/login.js';
import Signinf from "./component/Usingfarmic/Singinf.js";
import About from "./component/about.js";
import Products from "./component/products.js";
import Review from "./component/review.js";
import Contact from "./component/Contact.js";
// import Navigation from "./component/Navigation.js";
const App = () => {
  return (
    <div>
{/* <Navigation/> */}
<BrowserRouter>
      <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/Home/:names" element={<Home />} />
          <Route path="/Signinf/" element={<Signinf/>}/>
          <Route path="/home/" element={<Homen/>} />
          <Route path="/about/" element={<About />} />
          <Route path="/products/" element={<Products/>} />  
          <Route path="/review/"  element={<Review/>}/>
          <Route path="/Contact/" element={<Contact/>}/>
      </Routes>
    </BrowserRouter> 
    </div>
  );
}
export default App;

/*
// import SampleRenderProps from './component/RenderPropsComponent';

// function App{
//   return (
//     <div>
//       <SampleRenderProps/>
//     </div>
//   );
// }
// export default App;*/


          // HTTP AXIOS GET POST DELETE
           
// /*import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const apiUrl = 'https://6593e3c11493b011606961a2.mockapi.io/employee'; 

// const App = () => {
//   const [data, setData] = useState([]);
//   const [newItem, setNewItem] = useState('');
//   const [editItem, setEditItem] = useState(null);

//   useEffect(() => {
//     fetchData();
//   }, []);

//  /* const fetchData = async () => {
//     try {
//       const response = await axios.get(apiUrl);
//       setData(response.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const handleCreate = async () => {
//     try {
//       await axios.post(apiUrl, { text: newItem });
//       setNewItem('');
//       fetchData();
//     } catch (error) {
//       console.error('Error creating item:', error);
//     }
//   };

//   const handleUpdate = async (id, newText) => {
//     try {
//       await axios.put(`${apiUrl}/${id}`, { text: newText });
//       setEditItem(null);
//       fetchData();
//     } catch (error) {
//       console.error('Error updating item:', error);
//     }
//   }; 

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`${apiUrl}/${id}`);
//       fetchData();
//     } catch (error) {
//       console.error('Error deleting item:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>CRUD Operations with Axios in React</h1>
      
//       <ul>
//         {data.map(item => (
//           <li key={item.id}>
//             {editItem === item.id ? (
//               <>
//                 <input
//                   type="text"
//                   value={newItem}
//                   onChange={(e) => setNewItem(e.target.value)}
//                 />
//                 <button onClick={() => handleUpdate(item.id, newItem)}>
//                   Update
//                 </button>
//               </>
//             ) : (
//               <>
//                 {item.text}
//                 <button onClick={() => setEditItem(item.id)}>
//                   Edit
//                 </button>
//                 <button onClick={() => handleDelete(item.id)}>
//                   Delete
//                 </button>
//               </>
//             )}
//           </li>
//         ))}
//       </ul>

//       <div>
//         <input
//           type="text"
//           value={newItem}
//           onChange={(e) => setNewItem(e.target.value)}
//         />
//         <button onClick={handleCreate}>
//           Create
//         </button>
//       </div>
//     </div>
//   );
// };

// export default App;*/




// import React, { createContext, useContext, useState } from 'react';

// // Step 1: Create a context
// const ThemeContext = createContext();

// // Step 2: Create a provider component
// const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState('light');

//   const toggleTheme = () => {
//     setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// // Step 3: Create a custom hook to use the context
// const useTheme = () => {
//   const context = useContext(ThemeContext);
//   if (!context) {
//     throw new Error('useTheme must be used within a ThemeProvider');
//   }
//   return context;
// };

// // Step 4: Create components that use the theme context
// const ThemedComponent = () => {
//   const { theme, toggleTheme } = useTheme();

//   return (
//     <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#333' : '#fff' }}>
//       <h1>{`Current Theme: ${theme}`}</h1>
//       <button onClick={toggleTheme}>Toggle Theme</button>
//     </div>
//   );
// };

// const AnotherThemedComponent = () => {
//   const { theme } = useTheme();

//   return <p style={{ color: theme === 'light' ? '#333' : '#fff' }}>This component is also themed!</p>;
// };

// // Step 5: Use the ThemeProvider to wrap your components
// const App = () => {
//   return (
//     <ThemeProvider>
//       <ThemedComponent />
//       <AnotherThemedComponent />
//     </ThemeProvider>
//   );
// };

// export default App;



// import React from 'react';
// import Counter from './component/Counter';
// // import Counter2 from './component/Counter2';


// const App = () => {
//   return (
//     <div>
//      <Counter/>
  
//     </div>
//   );
// }

// export default App;




// import React from "react";
// import PostDataForm from "./component/mockapi";

// const Form = () => {
//     return (
//         <PostDataForm/>
//     );
// };

// export default Form;


// import React from 'react'
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Atslog from './component/ATS PROJECT/Atslog'
// import Register from './component/ATS PROJECT/Register';
// const App = () => {
//   return (
//     <div>
//       <BrowserRouter>
//        <Routes>
//          <Route path="/" element={<Atslog/>}></Route>
//          <Route path="/Register" element={<Register/>}/>
//          </Routes>
      
//     </BrowserRouter>
   
//     </div>
//   )
// }
// export default App

// import React from 'react'
// import SignUpForm from './component/practice project/Signupform'

// function App(){
//   return (
//    <SignUpForm/>
//   )
// }

// export default App



