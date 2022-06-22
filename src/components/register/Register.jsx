import React from 'react';
import { Link } from 'react-router-dom';
import './register.css';
const Register = () => {
    let handleSubmit = props.handleSubmit
    return (
        <form className="auth" onSubmit={handleSubmit}>
            <div className="auth-head">
                <p>Welcome to</p>
                <h2>Register your account</h2>
            </div>
            <div className="auth-body">
                <div className="auth-body-item">
                    <label htmlFor="email">Email :</label>
                    <input type="email" name='email' className='input-item' placeholder='Enter your email' />
                </div>
                <div className='auth-body-item'>
                    <label htmlFor="password">Password :</label>
                    <input type="password" name="password"  className='input-item'  id="password" placeholder='Enter your password' />
                </div>
                <div className='auth-body-item'>
                    <label htmlFor="re-password">Repeat Password:</label>
                    <input type="password" name="re-password"  className='input-item'  id="re-password" placeholder='Enter your password' />
                </div>
                <button type='submit' className='btn-submit'>Register</button>
            </div>
            <div className="auth-footer">
                <span>If you have account, let <Link to="/login">login</Link> here</span>
            </div>
        </form>
    )
}

export default Register