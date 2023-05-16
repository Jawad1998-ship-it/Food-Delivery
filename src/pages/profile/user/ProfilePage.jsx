import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../../../components/Footer';
import Navbar from '../../../components/Navbar';
import Sidebar from '../../../components/Sidebar';
import '../../../css/Profile.scss';
import { useContext } from 'react';
import { AuthContext } from '../../../utils/AuthProvider';


const ProfilePage = () => {

  const { data, setData } = useContext(AuthContext);
  const navigate = useNavigate("/");
  
  useEffect(() => {
      if(!data.user_type)
      {
        navigate("/");
      }
  }, [data])


  return (

    <>
      <Navbar />        
      <div className="profile">      
        <Sidebar />    
        <div className="info">
          <div>
            <div className="title-text">{data.name}</div>
            <div className="small-text">{data.username}</div>
          </div>
          <div>
            <div className="title-text">Email</div>
            <div className="small-text">{data.email}</div>
          </div>
          <div>
            <div className="title-text">Phone</div>
            <div className="small-text">{data.phone}</div>
          </div>
          <div>
            <div className="title-text">Address</div>
            <div className="small-text">{data.address}</div>
          </div>   
           <button className="editBtn">
            <Link to={`/user/${data.username}/edit`}>Edit Info</Link>  
          </button>
        </div>
      </div>
      <Footer />
    </>

  )
}

export default ProfilePage;