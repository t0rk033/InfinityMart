import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import NavBar from './components/NavBar'

function routes() {
  return (
  <HashRouter>
    <NavBar />
    <Routes>
        <Route path='/' element={<Home/>} />
    </Routes>
  </HashRouter>
  )
}

export default routes