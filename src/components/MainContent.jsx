import React from 'react'
import Footer from './Footer'

export default function MainContent({children}) {
  return (
    <div>
        <div className='main-content'>{children}</div>
        <Footer/>
    </div>
  )
}
