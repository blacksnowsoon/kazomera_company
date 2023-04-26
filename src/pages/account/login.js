import React from 'react';
import { Link } from 'react-router-dom';
import { images } from '../../assets';

export default function Login() {
  return (
    <>
      <h1 className='heading'>Login</h1>
      <form className='form login__from'>
        <input placeholder='Username' />
        <input placeholder='Password' type='password' />
        <button>Login</button>
      </form>
      <Link to="../recover">I forgot my password!</Link>
      <Link to="../signup">I need a new account.</Link>
    </>
  )
}
