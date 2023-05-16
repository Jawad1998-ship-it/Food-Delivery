import React from 'react';
import '../../../css/Admin.scss';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Sidebar from '../../../components/Sidebar';
import { useState } from 'react';


const AdminPage = () => {

    const [logged, setLogged] = useState(false);

    return (
        <>
            <Navbar />
            <div className='admin'>
                <Sidebar />
                <div className="admin-container">
                    <div className="admin-title">Revenue</div>
                    <div className="admin-info">
                        <div className="admin-orders">Total Orders : 120</div>
                        <div className="admin-commission">Total Commission: $14440</div>
                        <div className="admin-users">Number of Users : 50</div>
                        <div className="admin-companies">Number of Companies : 36</div>
                    </div>
                    <div className="checkMessages">
                        <button className="messages">Check Messages</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )

}

export default AdminPage;