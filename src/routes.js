import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import LoginPage from './pages/login/LoginPage'
import FreshFood from './pages/freshFoodsPage/FreshFood'
import DryAndCannedFoods from './pages/DryAndCannedFoods/DryAndCannedFoods'
import FrozenProducts from './pages/FrozenProducts/FrozenProducts'
import Drinks from './pages/drinks/Drinks'
import PersonalCareAndCleaning from './pages/PersonalCareAndCleaning/PersonalCareAndCleaning'
import HomeAndOthers from './pages/HomeAndOthers/HomeAndOthers'
import SingIn from './pages/singIn/SingIn'
import AboutProduct from './pages/aboutProduct/AboutProduct'
import Cart from './components/Cart'


function routes() {
  return (
  <HashRouter>
    <NavBar />
    
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={< LoginPage />} />
        <Route path='/freshfoods' element={<FreshFood/>} />
        <Route path='/DryAndCannedFoods' element={<DryAndCannedFoods/>}/>
        <Route path='/FrozenProducts' element={<FrozenProducts/>}/>
        <Route path='/drinks' element={<Drinks/>}/>
        <Route path='/PersonalCareAndCleaning' element={<PersonalCareAndCleaning/>}/>
        <Route path='/HomeAndOthers' element={<HomeAndOthers/>}/>
        <Route path='/singin' element={<SingIn/>}/>
        <Route path="/about-product/*" element={<AboutProduct />} />
    </Routes>
    <Footer />
  </HashRouter>
  )
}

export default routes
