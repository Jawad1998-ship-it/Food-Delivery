import React from 'react';
import '../../../css/AddFood.scss';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Sidebar from '../../../components/Sidebar';

const AddFood = () => {

    return (

        <>
            <Navbar />
            <div className="add-food">
                <Sidebar />
                <div className="add-container">
                    <div className="add-details">
                        <input placeholder='Food Name' type="text" />
                        <input placeholder='price' type="text" />
                        <input placeholder='calories' type="text" />
                        <input placeholder='Image' type="file" />
                    </div>   
                </div>
            </div>
            <Footer />
        </>

    )

}

export default AddFood;