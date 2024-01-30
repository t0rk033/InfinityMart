import React from 'react'
import './singIn.css'
import { Link } from 'react-router-dom';


function SingIn() {
  return (
    <div className='singInContainer'>
      <h2>Cadastre-se</h2>
      <form className='SingInForm'>
        <label htmlFor="name">Nome Completo</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="birth">Nascimento</label>
        <input type="date" name="" id="" />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="passwd">Senha</label>
        <input type="password" name="passwd" id="passwd" />
        <label htmlFor="passwdConfirm">Confirme a senha</label>
        <input type="password" name="passwdConfirm" id="passwdConfirm" />
        <label htmlFor="cpf">CPF</label>
        <input type="number" name="cpf" id="cpf" />
        <input type="submit" value="Cadastrar" className='singInBtn' />
      <Link to="/login" className='loginLink'>Já tem uma conta? <span>Acesse!</span></Link>

      </form>
    </div>
  )
}

export default SingIn;
