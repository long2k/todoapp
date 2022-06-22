import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';



const Login = (props) => {
    let errors = props.errors;
    let handleSubmit = props.handleSubmit
    return (
        <form className="auth" onSubmit={handleSubmit}>
            <div className="auth-head">
                <p>Welcome back</p>
                <h2>Login your account</h2>
            </div>
            <div className="auth-body">
                <div className="auth-body-item">
                    <label htmlFor="email">Email :</label>
                    <input type="email" name='email' id='email' className='input-item' onChange={props.handleChange} placeholder='Enter your email' />
                   
                </div>
                <div className='auth-body-item'>
                    <label htmlFor="password">Password :</label>
                    <input type="password" name="password" id='password'  className='input-item' onChange={props.handleChange}   placeholder='Enter your password' />
                    {
                        errors.password && <span>{errors.password}</span>
                    }
                </div>
                <div className="auth-bodyt-item check">
                    <input type="checkbox" name="check-box" id="check-box" />
                    <label htmlFor="check-box">Remember</label>
                </div>

                <button  type="submit" className='btn-submit'>Login</button>
            </div>
            <div className="auth-footer">
                <span>If you don't have account, let <Link to="/register">register</Link> here</span>
            </div>
        </form>
    )
}

export default Login