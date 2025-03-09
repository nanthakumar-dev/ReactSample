import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Profile from './components/profile'
import Contect from './components/Contect'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/contect' element={<Contect/>}/>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
