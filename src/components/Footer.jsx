import React from 'react';
import '../css/Footer.scss';


const Footer = () => {

    return (
        <div className="footer">
            <div className="address">    
                <div className="logo">
                    <a href="/">
                        <img src="/images/logo.png" alt="logo" />
                    </a>
                </div>
                <div className="small-text">
                    2182 Parrish Avenue
                </div>
                <div className="small-text">
                    Salinas, California
                </div>
                <div className="small-text">
                    93901
                </div>
            </div>
            <div className="links">
                <div className="small-text">Quick Links</div>
                <a href="/categories">Categories</a>
                <a href="/:id/orders">Order Now</a>
                <a href="/register">Register</a>
            </div>
            <div className="contact">
                <div className="small-text">Contact Us</div>
                <label htmlFor="email">Email</label>
                <input type="text" name='email' />
                <label htmlFor="message">Message</label>
                <textarea name="message" cols="33" rows="5"></textarea>
                <button type='submit' className="contact-btn">Send</button>
            </div>
        </div>
    )

}

export default Footer;