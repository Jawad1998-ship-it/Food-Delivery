import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Explore from '../components/Explore';
import '../css/Category.scss';


const CategoriesPage = () => {

    return (
        <>
            <Navbar />
            <div className='category'>
                <p className='title'>Delicious Food At Your Doorstep</p>
                <img src="../images/floating_burger_01.png" alt="" className='burger' />
                <img src="../images/floating_fries_01.png" alt="" className='fries1' />
                <img src="../images/floating_fries_02.png" alt="" className='fries2' />
            </div>
            <Explore type="categories" />
            <Footer />
        </>
        
    )

}

export default CategoriesPage;