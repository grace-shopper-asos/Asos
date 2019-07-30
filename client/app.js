import React from 'react'

import {Navbar, Home} from './components'
import Routes from './routes'
import {Nav} from './components'

const App = () => {
  return (
    <div>
      <Nav />
      {/* <Navbar /> */}
      <Routes />
    </div>
  )
}

export default App
