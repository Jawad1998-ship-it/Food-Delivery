import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Explore.scss';


const Explore = ({type}) => {

    const [stars, setStars] = useState(2);
    const [foods, setFoods] = useState();
    const navigate = useNavigate();
    const handleClick = (e) => {
        e.preventDefault();
        navigate("/categories");
    }

    return (

        <div className='explore'>
            <h1 className="bold-text">
                Explore Foods
            </h1>  
            {type==="home" && (
                <div className="foods">
                        <div className="card">
                            <img src="../images/burger.jpg" alt="" onClick={handleClick} />
                            <div className="card-details">
                                <p className="small-text">Burger</p>
                                <div className="reviews">{stars}</div>
                                <div className="name-text">Burger King</div> 
                                <div className="price-text">$400</div>
                                <div className="cals-text">400 Cals</div>
                            </div>
                        </div>
                        <div className="card">
                            <img src="../images/burger.jpg" alt="" />
                            <div className="card-details">
                                <p className="small-text">Burger</p>
                                <div className="reviews">{stars}</div>
                                <div className="name-text">Burger King</div>
                                <div className="price-text">$400</div>
                                <div className="cals-text">400 Cals</div>
                            </div>
                        </div>
                        <div className="card">
                            <img src="../images/burger.jpg" alt="" />
                            <div className="card-details">
                                <p className="small-text">Burger</p>
                                <div className="reviews">{stars}</div>
                                <div className="name-text">Burger King</div>
                                <div className="price-text">$400</div>
                                <div className="cals-text">400 Cals</div>
                            </div>
                        </div>
                        <div className="card">
                            <img src="../images/burger.jpg" alt="" />
                            <div className="card-details">
                                <p className="small-text">Burger</p>
                                <div className="reviews">{stars}</div>
                                <div className="name-text">Burger King</div>
                                <div className="price-text">$400</div>
                                <div className="cals-text">400 Cals</div>
                            </div>
                        </div>
                        <div className="card">
                            <img src="../images/burger.jpg" alt="" />
                            <div className="card-details">
                                <p className="small-text">Burger</p>
                                <div className="reviews">{stars}</div>
                                <div className="name-text">Burger King</div>
                                <div className="price-text">$400</div>
                                <div className="cals-text">400 Cals</div>
                            </div>
                        </div>
                        <div className="card">
                            <img src="../images/burger.jpg" alt="" />
                            <div className="card-details">
                                <p className="small-text">Burger</p>
                                <div className="reviews">{stars}</div>
                                <div className="name-text">Burger King</div>
                                <div className="price-text">$400</div>
                                <div className="cals-text">400 Cals</div>
                            </div>
                        </div>
                </div>  
            )}
            {type==="categories" && (
                <div>Hello</div>
            )}
            {/* {foods.slice(0, 3).map((item, key) => (
                <div key={key} className="card">
                    <img src="../images/burger.jpg" alt="" onClick={handleClick} />
                    <div className="card-details">
                        <p className="small-text">Burger</p>
                        <div className="reviews">{stars}</div>
                        <div className="name-text">Burger King</div> 
                    </div>
                </div>
            ))
            } */}
        </div>

    )

}

export default Explore;