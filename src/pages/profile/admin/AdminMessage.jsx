import React from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Sidebar from '../../../components/Sidebar';
import '../../../css/AdminMessages.scss';


const AdminMessage = () => {

    return (

        <>
            <Navbar />
            <div className="messages">
                <Sidebar />
                <div className="message-container">
                    
                </div>
            </div>
            <Footer />
        </>

    )

}

export default AdminMessage