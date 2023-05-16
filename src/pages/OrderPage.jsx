import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import '../css/Order.scss';


const OrderPage = () => {

    return (
        <>
            <Navbar />                
            <div className="order"> 
                <div className="item-container">
                    <div className="desc">
                        <div className="quantity">
                            Quantity : 12 items
                        </div>
                        <div className="delivery-charge">Delivery Charge : $20</div>
                        <div className="total">Total : $5200</div>
                        <div className="time">Estimated time : 1hour</div>
                    </div>  
                </div>           
                <div className="payment-options">
                    <div className="billing-details">
                        <input placeholder='First Name' type="text" />
                        <input placeholder='Last Name' type="text" />
                        <input placeholder='Email' type="email" />
                        <input placeholder='Number' type="number" min={0} />
                        <input placeholder='Street Address' type="text" />
                        <input placeholder='City' type="text" />
                        <input placeholder='Zip Code' type="text" />
                    </div>                
                    <button className="orderNow">Order Now</button>
                </div>
            </div>
            <Footer />
        </>
    )

}

export default OrderPage;