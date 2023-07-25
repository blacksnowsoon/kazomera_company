import { Link } from 'react-router-dom';

export default function Recover() {
	return (
    <>
      <h1 className='heading'>Recover the account</h1>
      <form className='form recover__form'>
        <input placeholder='Recover by email' type='email' />
        <button>Submit</button>
      </form>
      <Link to="../login">Have an account? Login Now!</Link>
      <Link to="../signup">Need an account? Singup Now!</Link>
    </>
	)
}
