import React, { useContext, useState } from 'react';
import '../css/Navbar.scss';
import { FaHamburger } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../utils/AuthProvider';

const Navbar = () => {

    const { data, setData } = useContext(AuthContext);

    const data_user = data.user_type === 'user';
    const data_company = data.user_type === 'company';
    const data_admin = data.user_type  === 'admin';
    const navigate = useNavigate();    
    const handleLogout = (e) => {
        e.preventDefault();
        const check = localStorage.removeItem('user');
        console.log(check);
        setData({});
        navigate("/");
    }



    return (
        <div className='navbar'>
            <div className="logo">
                <a href="/">
                    <img src="/images/logo.png" alt="logo" />
                </a>
            </div>
            <div className="nav-menu">
                <ul>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        {data_user && 
                            <Link to={`/user/${data.username}`}>Profile</Link>
                        }
                        {data_company && 
                            <Link to={"/company/:name"}>Profile</Link>
                        }
                        {data_admin && 
                            <Link to={"/dashboard"}>Dashboard</Link>
                        }
                    </li>
                    <li>
                        <Link to={"/categories"}>Categories</Link>
                    </li> 
                    <li>
                        {!data.user_type && 
                            <Link to={"/guest/order"}>Order Now</Link>
                        }
                    </li>
                    <li>
                        {data.user_type ? (
                            <>
                                <Link onClick={handleLogout}>Logout</Link>
                            </>
                        ) : 
                            <>
                                <Link to="/register" >Sign Up</Link> 
                            </>
                        }
                    </li>
                </ul>
            </div>
            {data.username && (
                <div className="naming">
                    <span>{data.name}</span>
                </div>
            )} 
            <div className="cart">
                   {data.user_type && (
                        <>
                            <a href={`/cart/${data.username}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-1 h-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                </svg>                    
                                <div className='cart-item'>2</div>
                            </a>   
                            </>
                    )}
                <div className="hamburger">
                    <FaHamburger />
                </div>
            </div>
 
        </div>
    )

}

export default Navbar;