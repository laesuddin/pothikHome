import React from 'react'
import Home from './Home'
import Admin from './components/admin/Admin'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/Blog' element={<Admin/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App