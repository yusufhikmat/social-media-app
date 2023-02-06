import { Link } from 'react-router-dom'
import './Login.scss'

const Login = () => {
  return (
    <div className='login'>
    <div className='card'>
        <div className='left'>
            <h1>Hello world!</h1>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
            <span>Don't have an account yet?</span>
           <Link to="/register"><button>Register</button></Link> 
        </div>
        <div className='right'>
            <h1>Login</h1>
            <form>
                <input type="text" placeholder='username'/>
                <input type="password" placeholder='password'/>
                <Link to="/login"><button>login</button></Link>

            </form>
        </div>
    </div>

    </div>
  )
}

export default Login