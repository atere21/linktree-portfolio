import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div className='contact'>
    <div className='container2'>
        <div className='text'><h4>Contact Me</h4>
        <p>Hi there, contact me to ask me about anything you have in mind</p></div>
            <form action='#'>
                <div className='form-row'>
                    <div className='input-data'>
                    <label>First Name</label>
                    <input className='name1' id='first_name' type='text'placeholder='Enter your first name' />

                </div>
                <div className='text'>
                <div className='input-data'>
                <label className='lastn'>Last Name</label>
                    <input className='name2' id='last_name' type='text'placeholder='Enter your last Name' />
                    
                    </div>
                    </div>
                </div>
                <div className='form-textarea'>
                <div className='input-data'>
                <label>Email</label>
                    <input id='email' type='email' placeholder='Yourname@email.com' />
                    
                    </div>
                </div>
                <div className='form-textarea'>
                    <div className='input-data'>
                    <label>Message</label>
                        <textarea id='message' cols="40" rows="7" placeholder='send me a message, i will reply as soon as possible'></textarea>
                        <div className='inner'></div>
                        <input type="checkbox" value=""></input>
                        <label>you agree to providing your data to us who may contact you</label>
                        <div className='button'>
                        <input id='btn_submit' type="submit" value="Send Message">
                        </input>
                    </div>
                    </div>
                    
                </div>

            </form>
            </div>  
    </div>
  )
}

export default Contact