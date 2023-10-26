import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router ,Route, Routes } from 'react-router-dom'
import Hero from './Hero';


function App() {
  return (
      <Router>
        <Routes>
          <Route path = '/' Component = {Hero} />
        </Routes>
      </Router>
  );
}

export default App;
