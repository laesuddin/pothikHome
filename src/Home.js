import React from 'react'
import { Blog, Footer, Header, Hero, Packages, Admin } from './components'

const Home = () => {
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

export default Home