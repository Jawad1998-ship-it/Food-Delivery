import React, { useContext } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Sidebar.scss';
import { AuthContext } from '../utils/AuthProvider';

const Sidebar = () => {

    const { data, setData } = useContext(AuthContext);
    console.log(data.user_type);
    const data_user = data.user_type === 'user';
    const data_company = data.user_type === 'company';
    const data_admin = data.user_type  === 'admin';


    return (

        <>
            {data_user && (
                <div className="sidebar">
                    <Link to={`/user/${data.username}`}>Profile</Link>
                    <Link to={`/user/${data.username}/orders`}>Orders</Link>
                </div>
            )}
            {(!data_user && !data_admin ) && (
                <div className="sidebar">
                    <Link to={"/company/:name"}>Profile</Link>                
                    <Link to={"/company/:name/menu"}>Menu</Link>
                </div>
            )}
            {(!data_user && !data_company ) && (
                <div className="sidebar">
                    <Link to={"/dashboard"}>Dashboard</Link>                
                    <Link to={"/dashboard/users"}>Users</Link>
                    <Link to={"/dashboard/companies"}>Companies</Link>
                </div>
            )}
        </>

    )

}

export default Sidebar;