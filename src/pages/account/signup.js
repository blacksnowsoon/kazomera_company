import React from 'react';
import { images } from '../../assets';
import { Link } from 'react-router-dom';

export default function Signup() {
  return (
    <>
      <form className='form__box'>
        <input placeholder='Username' />
        <input placeholder='Password' type='password' />
        <button>Login</button>
      </form>
      <Link to="recovery">I forgot my password!</Link>
      <Link to="recovery">I need a new account.</Link>
    </>
  )
}



// <from className='signup__form'>
//         <div className='form-groub'>
//           <input placeholder='username' />
//           <input type='password' placeholder='password' />
//         </div>
//         <input type='email' placeholder='email' />
//         <input type='email' placeholder='email' />
//         <button>Signup</button>
// 			</from>