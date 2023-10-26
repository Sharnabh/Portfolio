import { useState } from 'react'
import './App.css'
import { HashRouter ,Route, Routes } from 'react-router-dom'
import Hero from './Hero';


function App() {
  return (
      <HashRouter>
        <Routes>
          <Route path = '/' Component = {Hero} />
        </Routes>
      </HashRouter>
  );
}

export default App;
