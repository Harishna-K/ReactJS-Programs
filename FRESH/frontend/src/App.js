// import './App.css';
// import Home from './components/Home';
// import Footer from './components/layouts/Footer';
// import Header from './components/layouts/Header';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { HelmetProvider } from 'react-helmet-async';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <HelmetProvider>
//           <Header />
//           <div className='container container-fluid'>
//             <ToastContainer theme='dark' />
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path='/login' element={<Login />} />
//               <Route path='/register' element={<Register />} />
//             </Routes>
//           </div>
//           <Footer />
//         </HelmetProvider>
//       </div>
//     </Router>
//   );
// }

// export default App;

// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Header from './components/Header';
// Other imports...

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                <Route path="" element={<Header/>} />

                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    
                    {/* Other routes... */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
