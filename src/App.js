import React from 'react'
import Home from './Home'
import Admin from './components/admin/Admin'
import Blogpost from './components/blogpost/Blogpost'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/blogpost' element={<Blogpost/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App