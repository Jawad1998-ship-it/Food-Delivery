import React from 'react';
import '../../../css/CompanyMenuPage.scss';
import Navbar from '../../../components/Navbar';
import Sidebar from '../../../components/Sidebar';
import Footer from '../../../components/Footer';
import { CiCircleRemove } from 'react-icons/ci';
import { useState } from 'react';


const CompanyMenuPage = () => {

    const [add, setAdd] = useState(false);

    const addItem = (e) => {

        e.preventDefault();
        setAdd(!add);

    }

    return (

        <>        
            <Navbar />
            <div className='menu'>
                <Sidebar />
                <div className="menu-container">
                    <div className="items">
                        <div className="item">                            
                            <img src="/images/burger.jpg" alt="" />
                            <div className="menu-text">
                                Burger
                            </div>
                            <div className="price">$200</div>
                            <div className="cals">250 Cals</div>                                 
                            <div className="remove"><button className="remove-btn">Remove</button></div>
                       </div>
                        <div className="item">
                            <img src="/images/burger.jpg" alt="" />
                            <div className="menu-text">
                                Burger
                            </div>
                            <div className="price">$200</div>
                            <div className="cals">250 Cals</div> 
                            <div className="remove"><button className="remove-btn">Remove</button></div>
                        </div>
                        <div className="item">
                            <img src="/images/burger.jpg" alt="" />
                            <div className="menu-text">
                                Burger
                            </div>
                            <div className="price">$200</div>
                            <div className="cals">250 Cals</div> 
                            <div className="remove"><button className="remove-btn">Remove</button></div>
                        </div>
                        <div className="item">
                            <img src="/images/burger.jpg" alt="" />
                            <div className="menu-text">
                                Burger
                            </div>
                            <div className="price">$200</div>
                            <div className="cals">250 Cals</div> 
                            <div className="remove"><button className="remove-btn">Remove</button></div>
                        </div>
                        <div className="item">
                            <img src="/images/burger.jpg" alt="" />
                            <div className="menu-text">
                                Burger
                            </div>
                            <div className="price">$200</div>
                            <div className="cals">250 Cals</div> 
                            <div className="remove"><button className="remove-btn">Remove</button></div>
                        </div>
                        <div className="item">
                            <img src="/images/burger.jpg" alt="" />
                            <div className="menu-text">
                                Burger
                            </div>
                            <div className="price">$200</div>
                            <div className="cals">250 Cals</div> 
                            <div className="remove"><button className="remove-btn">Remove</button></div>
                        </div>
                        <div className="item">
                            <img src="/images/burger.jpg" alt="" />
                            <div className="menu-text">
                                Burger
                            </div>
                            <div className="price">$200</div>
                            <div className="cals">250 Cals</div> 
                            <div className="remove"><button className="remove-btn">Remove</button></div>
                        </div>
                        <div className="item">
                            <img src="/images/burger.jpg" alt="" />
                            <div className="menu-text">
                                Burger
                            </div>
                            <div className="price">$200</div>
                            <div className="cals">250 Cals</div> 
                            <div className="remove"><button className="remove-btn">Remove</button></div>
                        </div>
                    </div>
                </div>
                {add && (

                        <div className="add-container">

                        </div>

                )}
                <button onClick={addItem} className="menu-btn">Add Item</button>
            </div>
            <Footer />
        </>
    )

}

export default CompanyMenuPage;