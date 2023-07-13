import React, { useState } from 'react'
import "./Login.css"
import { auth } from '../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password).catch(() => {
      alert("not match password")
    });
  }

  return (
    <div className='login'>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgd05Vo_NiQAq2UBN8HHXefQNOZZSsAp_kPP5UYpUssxRsvoVk7ER0hPHydBSM83O4IL8&usqp=CAU"
        alt="instragram_logo"
      />
      <input 
        type="email"
        placeholder='Email' 
        onChange={e => setEmail(e.target.value)}
        value={email}
      />
      <input 
        type="password" 
        placeholder='Password'
        onChange={e => setPassword(e.target.value)}
        value={password}
      />
      <button onClick={handleLogin}>Log in</button>
    </div>
  )
}

export default Login