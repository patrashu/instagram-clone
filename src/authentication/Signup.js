import React, { useState } from 'react';
import "./Signup.css";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "../firebase";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSignup = () => {
    createUserWithEmailAndPassword(auth, email, password).then(
      signInWithEmailAndPassword(auth, email, password).then(
        updateProfile(auth.currentUser, {displayName: username})
      )  
    ).catch(err => {
      alert(err);
    });
  };

  return (
    <div className='signup'>
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
        type="text" 
        placeholder='Username'
        onChange={e => setUsername(e.target.value)}
        value={username}
      />
      <input 
        type="password" 
        placeholder='Password'
        onChange={e => setPassword(e.target.value)}
        value={password}
      />
      <button onClick={handleSignup}>Sign up</button>
    </div>
  )

}

export default Signup