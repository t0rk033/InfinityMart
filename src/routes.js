import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import LoginPage from './pages/login/LoginPage'


function routes() {
  return (
  <HashRouter>
    <NavBar />
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={< LoginPage />} />
    </Routes>
    <Footer />
  </HashRouter>
  )
}

export default routes
