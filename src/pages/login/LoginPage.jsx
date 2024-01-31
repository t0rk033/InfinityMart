import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './login.css'

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig'; 

function LoginPage() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) =>{
    e.preventDefault();
    try{
      await signInWithEmailAndPassword(auth, email, senha);

      navigate('/')
    }catch(error){
      console.error(error.message)
    }
  }
  return (
    <div className='login-container'>
      <h1>Acesse ou cadastre-se</h1>
      <form className='login-form' onSubmit={handleLogin}>
        <label htmlFor="user">Usuario</label>
        <input type="text" name="user" 
        id="user"  onChange={(e) => setEmail(e.target.value)}/>
        <label htmlFor="passwd">Senha</label>
        <input type="password" name="passwd" id="passwd" onChange={(e) => setSenha(e.target.value)}/>
        <input type="submit" value="Entrar" />
        <Link to='/singin' className='singIn'>Não tem uma conta? <span className='spanSingIn'>Cadastre-se</span></Link>
      </form>
    </div>
  )
}

export default LoginPage;

//futuramente incluir dados ao banco de dados e forma de manter usuario logado;

