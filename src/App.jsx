import React from 'react';
import {Inicio} from './components/Inicio';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'

export function App() {
  
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Inicio/>}></Route>
      </Routes>
    </Router>
  );
}
