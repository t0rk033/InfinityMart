import React from 'react'
import { Link } from 'react-router-dom';
import './login.css'
function LoginPage() {
  return (
    <div className='login-container'>
      <h1>Acesse ou cadastre-se</h1>
      <form className='login-form'>
        <label htmlFor="user">Usuario</label>
        <input type="text" name="user" 
        id="user" />
        <label htmlFor="passwd">Senha</label>
        <input type="password" name="passwd" id="passwd"/>
        <input type="submit" value="Entrar" />
        <Link to='/singin' className='singIn'>Não tem uma conta? <span className='spanSingIn'>Cadastre-se</span></Link>
      </form>
    </div>
  )
}

export default LoginPage;

//futuramente incluir dados ao banco de dados e forma de manter usuario logado;

