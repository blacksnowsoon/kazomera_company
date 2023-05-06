import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { images } from '../../assets';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import axios from 'axios';

let renderCount = 1;
export default function Login() {

  const form = useForm();
  const { handleSubmit, control, register, formState: {errors} } = form;
  const [login, setLogin] = useState({connected: null, data: null});
  const loginResult = useRef();


  function onSubmit(data) {
    console.log("Form submitted", data);
    axios.get('http://127.0.0.1:8000/api-auth/login/')
    .then(res => {
      console.log(res);
      setLogin({connected: true, data: "Login success"})
    })
    .catch(err => setLogin({connected: false, data: "Login faild"}))
  }

  return (
    <>
      <h1 className='heading'>Login <span style={{fontSize:'10px'}}>rendered ({renderCount++ / 2})</span> </h1>
      <form onSubmit={handleSubmit(onSubmit)} className='form login__from'>
        <input name="username" id="username" placeholder='Username' 
        {...register('username', {required: 'This field is required'})} />
        {errors.username && <p className='error'>{errors.username.message}</p>}
        <input name="password" id="password" placeholder='Password' type='password' 
        {...register('password', {required: "This field is required"})} />
        {errors.password && <p className='error'>{errors.password.message}</p>}
        <button>Login</button>
      </form>
      <Link to="../recover">I forgot my password!</Link>
      <Link to="../signup">I need a new account.</Link>
      <DevTool control={control} />
      
      {login.data && <h2 ref={loginResult} className={login.connected ? 'successed' : 'faild'}>{login.data}</h2>}

    </>
  )
}
