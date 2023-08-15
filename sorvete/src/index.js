import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Sorvete from './pages/sorvete';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Sorvete/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

