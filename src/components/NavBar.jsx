import React from 'react'
import './navBar.css'
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <header className='navbar'>
        <div className="left-navbar">
        <a href="#" className='logo'>InfinityMart</a>
        <ul className='navLinks'>
            <li><Link to='/login'><i class='bx bxs-user'></i> Login</Link></li>
            <li><a href="#">Suporte</a></li>
        </ul>
        </div>
        <div className="right-navbar">
            <ul className="navLinks">
                <li><a href="#">Alimentos Frescos</a></li>
                <li><a href="#">Alimentos secos e Enlatados</a></li>
                <li><a href="#">Produtos Congelados</a></li>
                <li><a href="#">Bebidas</a></li>
                <li><a href="#">Cuidados Pessoais e Limpeza</a></li>
                <li><a href="#">Casa e outros</a></li>
            </ul>
        </div>
    </header>
  )
}

export default NavBar;
