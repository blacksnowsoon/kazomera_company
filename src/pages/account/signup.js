import React from 'react';
import { images } from '../../assets';
import { Link } from 'react-router-dom';

export default function Signup() {
  return (
    <>
      <form className='form'>
        <input placeholder='Username' />
        <input placeholder='Password' type='password' />
        <button>Login</button>
      </form>
      <Link to="../login">I have an account!</Link>
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