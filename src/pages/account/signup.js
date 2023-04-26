import React from 'react';
import { images } from '../../assets';
import { Link } from 'react-router-dom';

export default function Signup() {
  return (
    <>
      <h1 className='heading'>Signup</h1>
      <form className='form signup__form'>
        <div style={{display:'flex', gap:"3%"}}>
          <input placeholder='Name' />
          <input placeholder='Username' />
        </div>
        <input placeholder='Email' />
        <input placeholder='Email again' />
        <input placeholder='password' type='password' />
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