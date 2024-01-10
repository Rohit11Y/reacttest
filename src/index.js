import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import List from './pages/Help';
import Formpage from './pages/Formpage';
import Tabhome from './pages/Tabhome';
import Registeration from './pages/Registeration';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      
        <Route path='/' element={<App />}>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/list' element={<List/>} />
          <Route path='/form/:id' element={<Formpage/>} />
          <Route path='/Contact' element={<Tabhome/>} />
          <Route path='/registeration' element={<Registeration/>} />
        </Route>
      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);

reportWebVitals();
