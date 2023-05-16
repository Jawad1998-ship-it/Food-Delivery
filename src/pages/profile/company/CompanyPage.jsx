import React from 'react';
import { Link } from 'react-router-dom';
import '../../../css/CompanyPage.scss';
import Sidebar from '../../../components/Sidebar';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';


const CompanyPage = () => {

    return (

        <>
            <Navbar />
            <div className="company-page">
              <Sidebar />
              <div className="total-sell">
                <div className="sell">Total Sell $120000</div>
                <div className="total-order">Total Orders 122</div>
              </div>
              <div className="company-orders">
                <div className="user-info">
                  <div className="customer">Jawad</div>
                  <div className="phone-number">+10 12121212</div>
                  <div className="address"> dhaka </div>
                  <div className="place-order">pizza</div>
                  <input type="text" placeholder='Delivery Time' className='delivery-inp' name="" id="" />
                  <div className="company-select">
                    <button className="company-btn">Accept</button>
                    <button className="company-btn">Cancel</button>
                  </div>
                </div>
                <div className="user-info">
                  <div className="customer">Jawad</div>
                  <div className="phone-number">+10 12121212</div>
                  <div className="address">Gulshan</div>
                  <div className="place-order">1 pizza</div>
                  <input type="text" placeholder='Delivery Time' className='delivery-inp' name="" id="" />
                  <div className="company-select">
                    <button className="company-btn">Accept</button>
                    <button className="company-btn">Cancel</button>
                  </div>
                </div>
                <div className="user-info">
                  <div className="customer">Jawad</div>
                  <div className="phone-number">+10 12121212</div>
                  <div className="address">Gulshan</div>
                  <div className="place-order">1 pizza</div>
                  <input type="text" placeholder='Delivery Time' className='delivery-inp' name="" id="" />
                  <div className="company-select">
                    <button className="company-btn">Accept</button>
                    <button className="company-btn">Cancel</button>
                  </div>
                </div>
                <div className="user-info">
                  <div className="customer">Jawad</div>
                  <div className="phone-number">+10 12121212</div>
                  <div className="address">Gulshan</div>
                  <div className="place-order">1 pizza</div>
                  <input type="text" placeholder='Delivery Time' className='delivery-inp' name="" id="" />
                  <div className="company-select">
                    <button className="company-btn">Accept</button>
                    <button className="company-btn">Cancel</button>
                  </div>
                </div>
                <div className="user-info">
                  <div className="customer">Jawad</div>
                  <div className="phone-number">+10 12121212</div>
                  <div className="address">Gulshan</div>
                  <div className="place-order">1 pizza</div>
                  <input type="text" placeholder='Delivery Time' className='delivery-inp' name="" id="" />
                  <div className="company-select">
                    <button className="company-btn">Accept</button>
                    <button className="company-btn">Cancel</button>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
        </>

    )

}

export default CompanyPage;