import React from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../context/ThemeContext'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
  return (
    <div>
        <Link to='/'>
            <h1>Crypto Trckr</h1>
        </Link>
        <div>
           <ThemeToggle/>
        </div>
    </div>
  )
}

export default Navbar