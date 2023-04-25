import React from 'react';
import { Link } from 'react-router-dom';
import { images } from '../../assets';

export default function Login() {
  return (
    <>
      <form className='form'>
        <input placeholder='Username' />
        <input placeholder='Password' type='password' />
        <button>Login</button>
      </form>
      <Link to="recovery">I forgot my password!</Link>
      <Link to="../signup">I need a new account.</Link>
    </>
  )
}
