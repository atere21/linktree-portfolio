
import './Contact.css'
function Contact() {
    
  return (
    <div className='contact'>
    <div className='container2'>
        <div className='text' id='text-me'><h4>Contact Me</h4>
        <p>Hi there, contact me to ask me about anything you have in mind</p></div>
            <form action='#'>
                <div className='form-row'>
                    <div className='input-data' id='first_N'>
                    <label>First Name</label>
                    <input className='name1' id='first_name' type='text' required placeholder='Enter your first name' />

                </div>
                <div className='text'>
                <div className='input-data'>
                <label className='lastn'>Last Name</label>
                    <input className='name2' id='last_name' type='text' required placeholder='Enter your last Name' />
                    
                    </div>
                    </div>
                </div>
                <div className='form-textarea'>
                <div className='input-data'>
                <label>Email</label>
                    <input id='email' type='email' required placeholder='Yourname@email.com' />
                    
                    </div>
                </div>
                <div className='form-textarea'>
                    <div className='input-data'>
                    <label className='msg'>Message</label>
                        <textarea className='message' required id='message' cols="40" rows="7" placeholder='send me a message, i will reply as soon as possible'>
                        </textarea>
                        </div>
                        
                            
                
                        <input type="checkbox" id='sub' ></input>
                        <label id='check_label'>You agree to providing your data to us who may contact you</label>
                        
                        <div className='button'>
                        <input id='btn__submit' type="submit" value="Send Message">
                        </input>
                       
                    
                    </div>
                    
                </div>

            </form>
            </div>  
            
    </div>
    
  )
}

export default Contact