import React from 'react'
import './SocialIcons.css'
import Slack from '../src/slack.png'
import Git from '../src/git.png'
import I4g from '../src/I4G.png'


function SocialIcons() {
  return (
    <div className='slack_git'>
      
      <div>
       <img className="slack" src={Slack} alt='menu' />
        <img className="git" src={Git} alt='menu' />
        </div>
        <div className='bottom__footer'>
        <img className='zuri' src= "https://internship.zuri.team/static/media/logo.36d2d48a.svg" alt="img" />
        <img className="I4g" src={I4g} alt='menu' />
        </div>
    </div>
  )
}

export default SocialIcons