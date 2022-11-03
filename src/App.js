import React from 'react'
import MenuIcon from './MenuIcon'
import ProfileLink from './ProfileLink'
import SocialIcons from './SocialIcons'
import {BrowserRouter as Router, Switch, Route}
from "react-router-dom"
import Contact from './Contact'

function App() {
  return (
    <Router>
    <div className='app' >
      <Switch>
        <Route path='/contact'>
        <MenuIcon />
        <Contact/>
       <SocialIcons />
        </Route>
        <Route path='/'>
        <MenuIcon />
        <ProfileLink />
        <SocialIcons />
        </Route>
       </Switch>
    </div>
    </Router>
  )
}

export default App