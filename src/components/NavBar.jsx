import React, { useState } from 'react'
import './navBar.css'
import { Link } from 'react-router-dom';
import LoginButton from './LoginButton';

function NavBar() {
  const [menuBtn, setMenuBtn] = useState('')
  const changeClass = ()=>{
    setMenuBtn((changeClass)=> changeClass === "" ? "active": '')
  } 
  return (
    <header className={`${menuBtn} navbar`}>
     
        <div className="left-navbar">
        <Link to='/' onClick={changeClass} className='logo'>InfinityMart</Link>
        <ul className='navLinks'>
            <li className='LoginBtn'><LoginButton/></li>
            <li><Link onClick={changeClass} to='/suport'><i className='bx bx-headphone'></i> Suporte</Link></li>
        </ul>
        </div>
        <div className="right-navbar">
            <ul className="navLinks">
              <li><Link onClick={changeClass} to="/">Home</Link></li>
                <li><Link onClick={changeClass} to='/freshfoods'>Alimentos Frescos</Link></li>
                <li><Link onClick={changeClass} to='/DryAndCannedFoods'>Alimentos secos e Enlatados</Link></li>
                <li><Link onClick={changeClass} to='/FrozenProducts'>Produtos Congelados</Link></li>
                <li><Link onClick={changeClass} to='/drinks'>Bebidas</Link></li>
                <li><Link onClick={changeClass} to='/PersonalCareAndCleaning'>Cuidados Pessoais e Limpeza</Link></li>
                <li><Link onClick={changeClass} to='/HomeAndOthers'>Casa e outros</Link></li>
            </ul>
        </div>
        <button onClick={changeClass} className="menu-btn"><i className='bx bx-menu' ></i></button>
    </header>
  )
}

export default NavBar;
