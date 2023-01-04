import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav className='nav'>
      <div className="home">
      <Link to="/" className='text-link'>
        Home
        </Link>
      </div>
      <div className="about">
      <Link to="/about" className='text-link'>
        About
        </Link>
      </div>
      <div className="contact">
      <Link to="/contact" className='text-link'>
        contact
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
