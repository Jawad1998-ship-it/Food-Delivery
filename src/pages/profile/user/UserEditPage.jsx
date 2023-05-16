import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../utils/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../../../components/Footer';
import Navbar from '../../../components/Navbar';
import Sidebar from '../../../components/Sidebar';
import '../../../css/UserEditPage.scss';
import Validation from '../../../utils/Validation';
import axios from 'axios';


const UserEditPage = () => {

    const { data, setData } = useContext(AuthContext);
    const navigate = useNavigate();
    console.log(data.id);

    useEffect(() => {
        if(!data.user_type)
        {
            navigate("/");
        }
    }, [])

    const [values, setValues] = useState({
        name: "",
        username: "",
        password: "",
        confirmPassword: "",
        email: "",
        phone: "",
        address: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setValues({...values, [e.target.name] : e.target.value});
    }


    const handleValidation = async (e) => {
            
            e.preventDefault();
            setErrors(Validation(values));
            if(values.name !== '' && values.username !== '' && values.password !== '' && values.confirmPassword !== '' && values.email !== '' && values.phone !== '' && values.address !== '')
            {
                const formData = new FormData(e.target);
                console.log(Object.fromEntries(formData.entries()));
                const url = "http://localhost:80/delivery/userEdit.php";
                await axios.post(url, formData)
                .then((response) => {                    
                    setData(response.data);   
                    localStorage.setItem('user', JSON.stringify(response.data));
                })
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
                navigate("/");
            }
        }

    return (

    <>
        <Navbar />            
        <div className="edit">        
            <Sidebar />
            <div className="infoEdit">
                <form onSubmit={handleValidation}>
                    <div className="title-input">
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
                            <span className='error'>
                                {errors.confirmPassword && errors.confirmPassword}
                            </span>
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
                    <div className="editBtn">
                        <button type="submit">Done!</button>
                    </div>
                </form>
            </div>
        </div>
        <Footer />
    </>

    )

}

export default UserEditPage;