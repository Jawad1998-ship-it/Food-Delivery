import React from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Sidebar from '../../../components/Sidebar';
import '../../../css/DashboardUsers.scss';


const DashboardUsers = () => {

    return (

        <>
            <Navbar />
            <div className="dashboard-users">
                <Sidebar />
                <div className="users-container">
                    <div className="dashboard-user">
                        <div className="userName">jawad</div>
                        <div className="userAddress">Saint Joseph</div>
                        <div className="userPhone">+144412</div>
                        <div className="userCreated">3 Jun</div>
                        <div className="user-btn">
                            <button className="user-delete">Delete</button>
                        </div>
                    </div>
                    <div className="dashboard-user">
                        <div className="userName">fawad</div>
                        <div className="userAddress">Dhanmondi</div>
                        <div className="userPhone">+121212</div>
                        <div className="userCreated">1 Jun</div>
                        <div className="user-btn">
                            <button className="user-delete">Delete</button>
                        </div>
                    </div>
                    <div className="dashboard-user">
                        <div className="userName">jamil</div>
                        <div className="userAddress">Uttara</div>
                        <div className="userPhone">+121212</div>
                        <div className="userCreated">2 Jun</div>
                        <div className="user-btn">
                            <button className="user-delete">Delete</button>
                        </div>
                    </div>
                    <div className="dashboard-user">
                        <div className="userName">jamil</div>
                        <div className="userAddress">Uttara</div>
                        <div className="userPhone">+121212</div>
                        <div className="userCreated">2 Jun</div>
                        <div className="user-btn">
                            <button className="user-delete">Delete</button>
                        </div>
                    </div>
                    <div className="dashboard-user">
                        <div className="userName">jamil</div>
                        <div className="userAddress">Uttara</div>
                        <div className="userPhone">+121212</div>
                        <div className="userCreated">2 Jun</div>
                        <div className="user-btn">
                            <button className="user-delete">Delete</button>
                        </div>
                    </div>
                </div>
                
            </div>
            <Footer />
        </>
        
    )

}

export default DashboardUsers;