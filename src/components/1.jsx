import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='background-header'>
        <div className='title-web'><h2>Monika WEB</h2></div>
        <div className='menu-header'>
          <h2>
          <Link to='/'>Home</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/about'>About</Link>
          </h2>
        </div>
    </div>
  )
}
