import './login.scss'

const Login = () => {
  return (
    <div className='container'>
        <input type='text' placeholder='Username'/>
        <input type='password' placeholder='Password'/>
        <button>Submit</button>
        <a><span>or SignUp</span></a>
    </div>
  )
}

export default Login