import React from 'react'
import './MenuIcon.css'
import MyImage from '../src/menu.png'
import Share from '../src/share.png'

function MenuIcon() {
  return (
    <div className='menu_1'>
         <div className='menu_exit'>
        <img className='shareIcon' src={Share} />
        <img className='menu' src={MyImage} alt="menu" /> 
          </div> 

    </div>
  )
}

export default MenuIcon