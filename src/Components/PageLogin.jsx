import React from 'react'
import Navbar from './Navbar'
import Login from './Login'
import Footer from './HomePage/Footer'

const PageLogin = () => {
  return (
    <>
    <nav>
      <Navbar />
    </nav>
    <div>
        <Login/>
    </div>
    <footer>
        <Footer/>
    </footer>
    </>
  )
}

export default PageLogin