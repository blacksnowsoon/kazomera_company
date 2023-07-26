import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import axios from 'axios';
// 400: the server could not understand the request due to 01 invalid syntax or 02 missing information in the request.


let renderCounter = 1
export default function Signup() {

  const form = useForm();
  const { handleSubmit, control, register, formState: { errors } } = form;
  function onSubmit(data) {
    const myData = {username: data.username, email: data.email, password: data.firstPassword}
    console.log("Form submitting:", myData);
    axios.post("https://kazapp.onrender.com/auth/register/", myData)
    .then(res => console.log("res", res))
    .catch(err => console.log("err", err))
  }

  return (
    <>
      <h1 className='heading'>Signup <span style={{fontSize:"10px"}}>rendered: ({renderCounter++ / 2})</span></h1>
      <form className='form signup__form' onSubmit={handleSubmit(onSubmit)}>
        <div style={{display:'flex', gap:"3%"}}>
          
          <input type="text" placeholder='first name' 
          {...register("firstName", {required: "This field is required."})} />
          {errors.firstName && <p className='error'>{errors.firstName.message}</p>}

          <input type="text" placeholder='second name' 
          {...register("secondName", {required: "This field is required."})} />
          {errors.secondName && <p className='error'>{errors.secondName.message}</p>}

        </div>
        <input type="text" placeholder='username' 
        {...register("username", {required: "This field is required."})} />
        {errors.username && <p className='error'>{errors.username.message}</p>}

        <input type='email' placeholder='email' 
        {...register("email", {required: "This field is required."})} />
        {errors.email && <p className='error'>{errors.email.message}</p>}

        <input type='password' placeholder='password'
        {...register("firstPassword", {required: "This field is required."})} />
        {errors.firstPassword && <p className='error'>{errors.firstPassword.message}</p>}

        <input type='password' placeholder='password again'
        {...register("secondPassword", {required: "This field is required."})} />
        {errors.secondPassword && <p className='error'>{errors.secondPassword.message}</p>}

        <button>Signup</button>
      </form>
      <DevTool control={control} />
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