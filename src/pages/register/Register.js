import { Link } from 'react-router-dom'
import './Register.scss'

const Register = () => {

  return (
    <div className='register'>
    <div className='card'>
        <div className='left'>
            <h1>Hello world!</h1>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
            <span>Do you have an account yet?</span>
            <Link to="/login"><button>Login</button></Link>
        </div>
        <div className='right'>
            <h1>Register</h1>
            <form>
                <input type="text" placeholder='Name'/>
                <input type="email" placeholder='Email'/>
                <input type="text" placeholder='username'/>
                <input type="password" placeholder='password'/>
                <Link to="/register"><button>Register</button></Link>

            </form>
        </div>
    </div>

    </div>
  )
}

export default Register