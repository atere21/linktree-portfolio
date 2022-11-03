import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div className='contact'> 
        <div className='text'><h2>Contact Me</h2>
        <p>Hi there, contact me to ask me about anything you have in mind</p></div>
            <form action='#'>
                <div className='input-data'>
                    <input type='text' />
                    <label>First Name</label>
                </div>
            </form>
            
    </div>
  )
}

export default Contact