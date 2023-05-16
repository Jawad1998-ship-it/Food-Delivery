import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { CiCircleRemove } from 'react-icons/ci';
import '../css/Cart.scss';

const CartPage = () => {

    return (

        <>
            <Navbar />
            <div className='cart-page'>
                <div className="cart-header">
                    <div className="cart-title">
                        Your Food Cart
                    </div>
                    <div className="cart-info">
                        <div className="items">4 items</div>
                        <div className="cart-fee">Delivery Fee: $122</div>
                        <div className="cart-total">Total: $33333</div>
                        <div className="delivery-time">Delivery Time: 20mins</div>
                        <button className="purchase">Purchase</button>
                    </div>
                </div>
                <div className="cart">
                    <div className="cart-items">
                        <div className="desc">
                            <div className="restaurant-name">Domino's</div>
                            <div className="name">Hamburger</div>
                            <div className="price">$400</div>
                            <div className="rating">x2</div>
                        </div>
                        <div className="cart-image">
                            <button>+</button>
                            <img src="../images/burger.jpg" alt="" />
                            <button>-</button>
                        </div>
                        <div className="remove"><CiCircleRemove /></div>
                    </div>
                    <div className="cart-items">
                        <div className="desc">
                            <div className="restaurant-name">Domino's</div>
                            <div className="name">Hamburger</div>
                            <div className="price">$400</div>
                            <div className="rating">x2</div>
                        </div>
                        <div className="cart-image">
                            <button>+</button>
                            <img src="../images/burger.jpg" alt="" />
                            <button>-</button>
                        </div>
                        <div className="remove"><CiCircleRemove /></div>
                    </div>
                    <div className="cart-items">
                        <div className="desc">
                            <div className="restaurant-name">Domino's</div>
                            <div className="name">Hamburger</div>
                            <div className="price">$400</div>
                            <div className="rating">x2</div>
                        </div>
                        <div className="cart-image">
                            <button>+</button>
                            <img src="../images/burger.jpg" alt="" />
                            <button>-</button>
                        </div>
                        <div className="remove"><CiCircleRemove /></div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
        

    )

}

export default CartPage;