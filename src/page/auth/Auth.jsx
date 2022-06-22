import React, { useEffect, useState, } from 'react'
import { useLocation, Navigate } from 'react-router-dom';
import Login from '../../components/login/Login';
import Register from '../../components/register/Register';
import useForm from '../../hook/useForm';
import api from '../../api/api';
import './auth.css';


const Auth = () => {
    let location = useLocation();
    let [isAuth, setAuth] = useState(false);

    const { handleChange, values, errors, handleSubmit } = useForm(submitUser);
    
    useEffect(() => {}, [errors, values])

    return (
        <>
            {
                isAuth && <Navigate to="/" replace={true} />
            }

            <div className="form">
                <div className="auth_bg">
                </div>
                <div className="authentication">
                    {
                        location.pathname === '/login' ? 
                        <Login 
                            values={values} 
                            handleChange={handleChange} 
                            errors={errors} 
                            handleSubmit={handleSubmit}
                            setAuth={setAuth}
                        />  
                        : 
                        <Register 
                            values={values} 
                            handleChange={handleChange} 
                            errors={errors} 
                            handleSubmit={handleSubmit}
                            setAuth={setAuth}
                        />
                    }

                </div>
            </div>
        </>

    )
}

export default Auth