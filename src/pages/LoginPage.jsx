import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import '../css/Login.scss';
import { useState } from 'react';
import LoginValidation from '../utils/LoginValidation';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../utils/AuthProvider';
import { useContext } from 'react';
import { useEffect } from 'react';


const LoginPage = () => {
      
  const [values, setValues] = useState({

      email: "",
      password: "",

  });
  const { data, setData } = useContext(AuthContext);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    if(data.user_type)
    {
      navigate("/");
    }
  }, [data])

  const handleLogin = (e) => {

      setValues({...values, [e.target.name] : e.target.value});

  }

  const  handleValidation = async (e) => {

      e.preventDefault();
      setErrors(LoginValidation(values));
      const formData = new FormData(e.target);
      const url = "http://localhost:80/delivery/login.php";
      await axios.post(url, formData)
      .then((response) => {
        setData(response.data);   
        localStorage.setItem('user', JSON.stringify(response.data));
      })
      .catch((error) => console.log(error));
      navigate("/");
  }


  return (

    <>
      <Navbar />
      <div className="login">
        <form onSubmit={handleValidation}>
          <div className="loginContainer">
            <label htmlFor="email">Email</label>
            <div className="loginInput">
                <input name="email" value={values.email} onChange={handleLogin} type="email" placeholder='Email' />
                <span className="error">
                  {(errors.email && errors.email2) && errors.email}{(!errors.email && errors.email2) && errors.email2}
                </span>
            </div>            
            <label htmlFor="password">Password</label>
            <div className="loginInput">
                <input name="password" value={values.password} onChange={handleLogin} type="password" placeholder='Password' />
                <span className="error">{errors.password}</span>
            </div>
          </div>
          <button className="login-btn" type="submit">Login</button>
          <p className="sign-up">Not registered yet?<a href="/register">Sign Up</a></p>
        </form>
        <p>{data.name}</p>
      </div>
      <Footer />
    </>

  )

}

export default LoginPage;