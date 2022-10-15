import React from 'react'
import { useState } from 'react'
import CakeContainer from './components/CakeContainer'
import CakeContainer2 from './components/CakeContainer2'
import IceCreamContainer from './components/IceCreamContainer'
import ItemContainer from './components/ItemContainer'
import NewCakeContainer from './components/NewCakeContainer'
import UserContainer from './components/UserContainer'
import './styles/App.css'

const App = () => {
  return (
    <div className="App">
      <CakeContainer />
      <CakeContainer2 />
      <IceCreamContainer />
      <NewCakeContainer />
      <ItemContainer cake />
      <ItemContainer />
      <UserContainer />
    </div>
  )
}

export default App
