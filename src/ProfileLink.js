import React from 'react'
//  import MyImage from '../src/menu.png'
//  import Share from '../src/share.png'
 import Img from '../src/Dp.jpg'
import './ProfileLink.css'


function ProfileLink() {
  return (
    <div className='profileLinks'>
      {/* <div className='menu__exit'>
        <img className='shareIcon' src={Share} />
        <img className='menu' src={MyImage} alt="menu" /> 
          </div> */}
       <div className='links'>
       <img className='ImgIcon' src={Img} />
          
          <div className='name'>
          <h2>Oluwatosin Atere</h2>
          </div >
       
      <a id='twitter' href='https://twitter.com/flourishgold212' target='_blank'><h3>Twitter Link </h3></a>
      <a id="btn__zuri" href="https://training.zuri.team/" target="_blank"><h3 id="btn__zuri">Zuri Team </h3></a>
      <a id="btn__zuri" href="https://books.zuri.team" target="_blank"><h3 id="btn__zuri">Zuri Books </h3></a>
      <a id="book__python" href="https://books.zuri.team/python-for-beginners?ref_id=<OluwatosinAtere>" target="_blank"><h3>Python Books</h3></a>
      <a id="pitch" href="https://background.zuri.team" target="_blank"><h3>Background Check for Coders</h3></a>
      <a href='https://books.zuri.team/design-rules' target="_blank"><h3>Design Books</h3></a>
      <a id='contact' href='./Contact' target="_blank"><h3>Contact Me</h3></a>
      </div>
    </div>
  )
}

export default ProfileLink