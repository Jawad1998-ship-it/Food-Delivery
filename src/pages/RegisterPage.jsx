import React, { useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import '../css/Register.scss';
import Validation from '../utils/Validation';
import ComValidation from '../utils/ComValidation';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const RegisterPage = () => {
    
    const [bus, setBus] = useState(false);
    const navigate = useNavigate();

    const [values, setValues] = useState({
        name: "",
        username: "",
        password: "",
        confirmPassword: "",
        email: "",
        phone: "",
        address: "",
    });
    const [comValues, setComValues] = useState({
        name: "",
        fullname: "",
        password: "",
        confirmPassword: "",
        email: "",
        phone: "",
        address: "",
        photo: "",
    })
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {

        if(!bus)
        {
            setValues({...values, [e.target.name] : e.target.value});
        }
        if(bus)
        {
            setComValues({...comValues, [e.target.name] : e.target.value});
        }

    }

    const handleValidation = async (e) => {

        if(!bus)
        {   
            e.preventDefault();
            setErrors(Validation(values));
            if(values.name !== '' && values.username !== '' && values.password !== '' && values.confirmPassword !== '' && values.email !== '' && values.phone !== '' && values.address !== '')
            {
                const formData = new FormData(e.target);
                console.log(Object.fromEntries(formData.entries()));
                const url = "http://localhost:80/delivery/registration.php";
                await axios.post(url, formData)
                .then((response) => alert((response.data)))
                .catch((error) => console.log(error));  
                setValues({
                    name: "",
                    username: "",
                    password: "",
                    confirmPassword: "",
                    email: "",
                    phone: "",
                    address: "",
                })
                navigate("/login");
            }
        }
        if(bus)
        {            
            e.preventDefault();            
            setErrors(ComValidation(comValues));
            if(comValues.name !== '' && comValues.fullname !== '' && comValues.password !== '' && comValues.confirmPassword !== '' && comValues.email !== '' && comValues.phone !== '' && comValues.address !== '' && comValues.photo !== '')
            {
                const comFormData = new FormData(e.target);
                console.log(Object.fromEntries(comFormData.entries()));
                const url = "http://localhost:80/delivery/registrationCom.php";
                await axios.post(url, comFormData)
                .then((response) => alert((response.data)))
                .catch((error) => console.log(error)); 
                setComValues({
                    name: "",
                    fullname: "",
                    password: "",
                    confirmPassword: "",
                    email: "",
                    phone: "",
                    address: "",
                    photo: "",
                })
                navigate("/login");
            }
        }
    }

    const handleClick = (e) => {
        e.preventDefault();
        setBus(!bus);
    }


    return (

        <>
            <Navbar />
            <div className="register">
                {!bus && (
                    <div className="bold-text">
                        Business Account?
                        <button onClick={handleClick} className='btn'>Create Business Account</button>
                    </div> 
                )}
                {bus && (
                    <div className="bold-text">
                        User Account?
                        <button onClick={handleClick} className='btn'>Create User Account</button>
                    </div> 
                )}
                {!bus && (
                    <div className='user'>
                        <form onSubmit={handleValidation}>
                            <div className="userContainer">
                                <div className="userInp">
                                    <input name='name' type="text" value={values.name} onChange={handleChange} placeholder='Full Name' />
                                    <span className='error'>{errors.name && errors.name}</span>
                                </div>
                                <div className="userInp">
                                    <input name='username' type="text" value={values.username} onChange={handleChange} placeholder='Username' />
                                    <span className='error'>{errors.username && errors.username}</span>
                                </div>
                                <div className="userInp">
                                    <input name='password' type="password" value={values.password} onChange={handleChange} placeholder='Password' />
                                    <span className='error'>{errors.password && errors.password}</span>
                                </div>
                                <div className="userInp">
                                    <input pattern={values.password} name='confirmPassword' type="password" value={values.confirmPassword} onChange={handleChange} placeholder='Confirm Password' />
                                     <span className='error'>{errors.confirmPassword && errors.confirmPassword}</span>
                                </div>
                                <div className="userInp">
                                    <input name='email' type="email" value={values.email} onChange={handleChange} placeholder='Email' />
                                    <span className='error'>
                                        {(errors.email && errors.email2) && errors.email}{(!errors.email && errors.email2) && errors.email2}
                                    </span>
                                </div>
                                <div className="userInp">
                                    <input name='phone' type="text" value={values.phone} onChange={handleChange} placeholder='Phone' />
                                    <span className='error'>{errors.phone && errors.phone}</span> 
                                </div>
                                <div className="userInp">
                                    <input name='address' type="text" value={values.address} onChange={handleChange} placeholder='Address' />
                                    <span className='error'>{errors.address && errors.address}</span>
                                </div>
                            </div>
                            <button type='submit'>Sign Up</button>
                            <span className='account'>Already have an account? <Link to={"/login"}>Login</Link></span>
                        </form>
                    </div>    
                )}
                {bus && (
                    <div className="company">
                        <form onSubmit={handleValidation}>
                            <div className="comContainer">
                                <div className="comInput">
                                    <input name='name' onChange={handleChange} value={comValues.name} type="text" placeholder='Outlet Name' /> 
                                    <span className='error'>{errors.name && errors.name}</span>
                                </div>
                                <div className="comInput">
                                    <input name='fullname' onChange={handleChange} value={comValues.fullname} type="text" placeholder='Full Name' /> 
                                    <span className='error'>{errors.fullname && errors.fullname}</span>
                                </div>
                                <div className="comInput">
                                    <input name='password' onChange={handleChange} value={comValues.password} type="password" placeholder='Password'/>   
                                    <span className='error'>{errors.password && errors.password}</span>
                                </div>
                                <div className="comInput">
                                    <input name='confirmPassword' onChange={handleChange} value={comValues.confirmPassword} type="password" placeholder='Confirm Password'/>    
                                    <span className='error'>{errors.confirmPassword && errors.confirmPassword}</span>
                                </div>
                                <div className="comInput">
                                    <input name='email' onChange={handleChange} value={comValues.email} type="email" placeholder='Email' /> 
                                    <span className='error'>
                                        {(errors.email && errors.email2) && errors.email}{(!errors.email && errors.email2) && errors.email2}
                                    </span>
                                </div>
                                <div className="comInput">
                                    <input name='phone' onChange={handleChange} value={comValues.phone} type="text" placeholder='Phone' />
                                    <span className='error'>{errors.phone && errors.phone}</span>
                                </div>
                                <div className="comInput">
                                    <input name='address' onChange={handleChange} value={comValues.address} type="text" placeholder='Address'/>  
                                    <span className='error'>{errors.address && errors.address}</span>
                                </div>
                                <div className="comInput">                                             
                                    <label htmlFor="files">Select Photo</label>
                                    <input name='photo' onChange={handleChange}  value={comValues.photo} type="file" id="files" className="file" accept='.jpg, .jpeg, .png'/>
                                    <span className='error'>{errors.photo && errors.photo}</span>
                                </div>        
                            </div>   
                            <button type='submit'>Sign Up</button>
                             <span className='account'>Already have an account? <Link to={"/login"}>Login</Link></span>
                        </form>
                    </div>    
                )}
            </div>
            <Footer />
        </>

    )

}


export default RegisterPage;