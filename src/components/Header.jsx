import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.scss';

const Header = () => {

    return (

        <div className='header'>
            <div className="banner">            
                <h1 className='bold-text'>The Taste</h1>
                <h2 className='bold-text'>Are you hungry?</h2>
                <h2 className='bold-text'>Start ordering now!</h2>
                <div className="input_container">
                    <Link to="/categories">
                        <button type='button'>Explore</button>
                    </Link>
                </div>
            </div>
        </div>

    )

}

export default Header;