import React, { useState } from 'react'
import './singIn.css'
import { Link, useNavigate } from 'react-router-dom';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig'; 


function SingIn( ) {
  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleRegistro = async (e) => {
    e.preventDefault();

    try {
      // Cria um novo usuário com email e senha
      await createUserWithEmailAndPassword(auth, email, senha);

      // Redireciona para a página desejada após o registro
      // Substitua '/dashboard' pelo caminho desejado
      history('/login');
    } catch (error) {
      console.error(error.message);
      // Trate o erro de registro aqui
    }
  };
  return (
    <div className='singInContainer'>
      <h2>Cadastre-se</h2>
      <form className='SingInForm' onSubmit={handleRegistro}>
        <label htmlFor="name">Nome Completo</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="birth">Nascimento</label>
        <input type="date" name="" id="" />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} required />
        <label htmlFor="passwd">Senha</label>
        <input type="password" name="passwd" id="passwd"  onChange={(e) => setSenha(e.target.value)} required/>
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
