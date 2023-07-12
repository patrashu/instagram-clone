import React, { useState } from 'react';
import "./Suggestions.css";
import { Avatar } from '@mui/material';

function Suggestions() {
  const [users, setUsers] = useState([
    {}
  ])

  return (
    <div className='suggesions'>
      <div className='suggesions__title'>
        Suggestions for you
        <button>See All</button>
      </div>
      <div className='suggesions__usernames'>
        <div className='suggesions__username'>
          <div className='username_left'>
            <span className='avatar'>
              <Avatar>R</Avatar>
            </span>
            <div className='username_info'>
              <span className='username'>Zeroone</span>
              <span className='relation'>New to Instagram</span>
            </div>
          </div>
          <button className='follow__button'>Follow</button>
        </div>
        <div className='suggesions__username'>
          <div className='username_left'>
            <span className='avatar'>
              <Avatar>R</Avatar>
            </span>
            <div className='username_info'>
              <span className='username'>Zeroone</span>
              <span className='relation'>New to Instagram</span>
            </div>
          </div>
          <button className='follow__button'>Follow</button>
        </div>
        <div className='suggesions__username'>
          <div className='username_left'>
            <span className='avatar'>
              <Avatar>R</Avatar>
            </span>
            <div className='username_info'>
              <span className='username'>Zeroone</span>
              <span className='relation'>New to Instagram</span>
            </div>
          </div>
          <button className='follow__button'>Follow</button>
        </div>
        <div className='suggesions__username'>
          <div className='username_left'>
            <span className='avatar'>
              <Avatar>R</Avatar>
            </span>
            <div className='username_info'>
              <span className='username'>Zeroone</span>
              <span className='relation'>New to Instagram</span>
            </div>
          </div>
          <button className='follow__button'>Follow</button>
        </div>
      </div>
    </div>
  )
}

export default Suggestions