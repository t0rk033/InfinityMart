import React from 'react'
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
      </form>
    </div>
  )
}

export default LoginPage
