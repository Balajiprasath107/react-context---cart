import { useState } from 'react'

import './App.css'
import Header from './components/header'
import Navbar from './components/Navbar'
import Catalog from './components/catalog'

function App() {

  return (
    <>
      <Navbar/>
      <Header />
      <Catalog/>
    </>
  )
}

export default App
