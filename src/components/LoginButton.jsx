import React, {useState, useEffect} from 'react'
import './loginButton.css'
import { auth } from '../firebaseConfig'
import { useNavigate } from 'react-router-dom'

function LoginButton() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged((user)=>{
            setUser(user);
        });
        return () => unsubscribe()
    }, [])

    const handleLogout = async ()=>{
        try{
            await auth.signOut()
            navigate('/login')
        }catch (error){
            console.error('Erro durante o logout', error)
        }
    };
    const getUserNameFromEmail = (email) =>{
        const atIndex = email.indexOf('@');
        return atIndex !== -1 ? email.substring(0, atIndex): email;
    };
  return (
    <div >
    {user ? (
      <div className='textButton'>
        <p>Olá: {getUserNameFromEmail(user.email)}</p>
        <button onClick={handleLogout}>Sair</button>
      </div>
    ) : (
      <button onClick={() => navigate('/login')}><i className='bx bxs-user' >Login</i></button>
    )}
  </div>
);
};

export default LoginButton;
