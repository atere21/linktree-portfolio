import React from 'react'
import './SocialIcons.css'
import Slack from '../src/slack.png'
import Git from '../src/git.png'
import Ftext from '../src/Ftext.png'
import I4g from '../src/I4G.png'


function SocialIcons() {
  return (
    <div className='slack_git'>
      
      <div className='sl_git'>
       <img className="slack" src={Slack} alt='menu' />
        <img className="git" src={Git} alt='menu' />
        </div>
        <div className='bottom__footer'>
          <div className='b__foot'>
            <div>
        <img className='zuri' src= "https://internship.zuri.team/static/media/logo.36d2d48a.svg" alt="img" />
        <img className='Text' src={Ftext}/>
        <img className="I4g" src={I4g} alt='menu' />
        </div>
        </div>
        </div>
    </div>
  )
}

export default SocialIcons