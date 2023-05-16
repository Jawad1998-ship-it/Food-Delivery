import React from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Sidebar from '../../../components/Sidebar';
import '../../../css/DashboardCompanies.scss';


const DashboardCompanies = () => {

  return (

    <>
      <Navbar />
        <div className="dashboard-companies">
          <Sidebar />
          <div className="companies-container">
              <div className="company-owner">
                <div className="companyName">Burger King</div>
                <div className="companyOwner">Jawad</div>
                <div className="company-phone">+1 232323</div>
                <div className="company-address">Sylvester Park</div>
                <div className="companyCreated">1 March 2021</div>
                <div className="companyReview">5+</div> 
                <div className="company-delete">
                  <button className="company-delete-btn">Delete Company</button>
                </div>
              </div>
              <div className="company-owner">
                <div className="companyName">Burger King</div>
                <div className="companyOwner">Jawad</div>
                <div className="company-phone">+1 232323</div>
                <div className="company-address">Sylvester Park</div>
                <div className="companyCreated">1 March 2021</div>
                <div className="companyReview">5+</div> 
                <div className="company-delete">
                  <button className="company-delete-btn">Delete Company</button>
                </div>
              </div> 
              <div className="company-owner">
                <div className="companyName">Burger King</div>
                <div className="companyOwner">Jawad</div>
                <div className="company-phone">+1 232323</div>
                <div className="company-address">Sylvester Park</div>
                <div className="companyCreated">1 March 2021</div>
                <div className="companyReview">5+</div> 
                <div className="company-delete">
                  <button className="company-delete-btn">Delete Company</button>
                </div>
              </div>
              <div className="company-owner">
                <div className="companyName">Burger King</div>
                <div className="companyOwner">Jawad</div>
                <div className="company-phone">+1 232323</div>
                <div className="company-address">Sylvester Park</div>
                <div className="companyCreated">1 March 2021</div>
                <div className="companyReview">5+</div> 
                <div className="company-delete">
                  <button className="company-delete-btn">Delete Company</button>
                </div>
              </div>
              <div className="company-owner">
                <div className="companyName">Burger King</div>
                <div className="companyOwner">Jawad</div>
                <div className="company-phone">+1 232323</div>
                <div className="company-address">Sylvester Park</div>
                <div className="companyCreated">1 March 2021</div>
                <div className="companyReview">5+</div> 
                <div className="company-delete">
                  <button className="company-delete-btn">Delete Company</button>
                </div>
              </div>
          </div>
        </div>
      <Footer />
    </>

  )

}

export default DashboardCompanies;