import React from 'react';
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Footer from './Components/Footer';
import AllTours from './Components/AllTours';
import Hotels from './Components/Hotels';
import Homepage from './Components/Homepage';

function App() {
  return (
    <div>
     <Router>
      <Home/>
       <Routes>
        <Route path="/" element={<Homepage />} />
         <Route path='login' element={<Login/>}/>
         <Route path='signup' element={<Signup/>}/>
         <Route path='alltours' element={<AllTours/>}/>
         <Route path='hotels' element={<Hotels/>}/>
      </Routes>
     <Footer/>
     </Router>
    </div>
  );
}

export default App;
