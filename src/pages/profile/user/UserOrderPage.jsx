import React, { useContext, useEffect } from 'react';
import Footer from '../../../components/Footer';
import Navbar from '../../../components/Navbar';
import Sidebar from '../../../components/Sidebar';
import '../../../css/UserOrderPage.scss';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../utils/AuthProvider';


const UserOrderPage = () => {

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
            <div className='user-order'>            
                <Sidebar />                        
                <div className="user-purchased">
                    <div className="purchased-items">
                        <div className="cart-image">
                            <img src="/images/burger.jpg" alt="" />
                        </div>
                        <div className="purchased-desc">
                            <div className="restaurant-name">Domino's</div>
                            <div className="name">Hamburger</div>
                            <div className="price">$400</div>
                            <div className="user-quantity">2 items</div>
                        </div>
                        <div className="status">
                            Pending
                        </div>
                        <div className="cancel">
                           <button className="cancel-btn">Cancel</button>
                        </div>
                    </div>      
                    <div className="purchased-items">
                        <div className="cart-image">
                            <img src="/images/burger.jpg" alt="" />
                        </div>
                        <div className="purchased-desc">
                            <div className="restaurant-name">Domino's</div>
                            <div className="name">Hamburger</div>
                            <div className="price">$400</div>
                            <div className="user-quantity">2 items</div>
                        </div>
                        
                        <div className="status">
                            Delivered
                        </div>
                        <div className="cancel">
                            <button className="cancel-btn">Cancel</button>
                        </div>
                    </div> 
                    <div className="purchased-items">
                        <div className="cart-image">
                            <img src="/images/burger.jpg" alt="" />
                        </div>
                        <div className="purchased-desc">
                            <div className="restaurant-name">Domino's</div>
                            <div className="name">Hamburger</div>
                            <div className="price">$400</div>
                            <div className="user-quantity">2 items</div>
                        </div>
                        
                        <div className="status">
                            Delivered
                        </div>
                        <div className="cancel">
                           <button className="cancel-btn">Cancel</button>
                        </div>
                    </div>    
                    <div className="purchased-items"> 
                        <div className="cart-image">
                            <img src="/images/burger.jpg" alt="" />
                        </div>
                        <div className="purchased-desc">
                            <div className="restaurant-name">Domino's</div>
                            <div className="name">Hamburger</div>
                            <div className="price">$400</div>
                            <div className="user-quantity">2 items</div>
                        </div>
                        <div className="status">
                            Pending
                        </div>
                        <div className="cancel">
                           <button className="cancel-btn">Cancel</button>
                        </div>
                    </div>  
                    <div className="purchased-items"> 
                        <div className="cart-image">
                            <img src="/images/burger.jpg" alt="" />
                        </div>
                        <div className="purchased-desc">
                            <div className="restaurant-name">Domino's</div>
                            <div className="name">Hamburger</div>
                            <div className="price">$400</div>
                            <div className="user-quantity">2 items</div>
                        </div>
                        <div className="status">
                            Delivered
                        </div>
                        <div className="cancel">
                           <button className="cancel-btn">Cancel</button>
                        </div>
                    </div>       
                    <div className="purchased-items"> 
                        <div className="cart-image">
                            <img src="/images/burger.jpg" alt="" />
                        </div>
                        <div className="purchased-desc">
                            <div className="restaurant-name">Domino's</div>
                            <div className="name">Hamburger</div>
                            <div className="price">$400</div>
                            <div className="user-quantity">2 items</div>
                        </div>
                        <div className="status">
                            Delivered
                        </div>
                        <div className="cancel">
                           <button className="cancel-btn">Cancel</button>
                        </div>
                    </div>    
                </div>
            </div>
            <Footer />
        </>
       

    )

}

export default UserOrderPage;