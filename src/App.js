import React from 'react'
import { Blog, Footer, Header, Hero, Packages } from './components'
import './App.css'
const App = () => {
  return (
    <div className='App'>
      <Header/>
      <Hero/>
      <Packages/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App