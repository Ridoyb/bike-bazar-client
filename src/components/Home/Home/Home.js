import React from 'react';
import { TiArrowForward} from 'react-icons/ti';

const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen mb-8" style={{ backgroundImage: `url("https://websitedemos.net/bike-modification-04/wp-content/uploads/sites/736/2020/11/custom-bike-builder-hero-section-bg.jpg")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">MAKE YOUR DREAM BIKE TRULY YOURS</h1>
                    <p className="mb-5 text-3xl">Buy and sell your bikes....</p>
                    </div>
                </div>
            </div>
            <div>
                <p className='text-center text-3xl my-8'>BROWSE CATEGORIES</p>
            </div>

            <div className="hero ">
                <div className="hero-content  flex-col lg:flex-row">
                    <img src="https://websitedemos.net/bike-modification-04/wp-content/uploads/sites/736/2020/11/custom-bike-builder-motorcycle.png" className=" rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">BUY YOUR BIKES!!</h1>
                        <ul className="steps steps-vertical ">
                            <li className="step step-primary">Register</li>
                            <li className="step step-primary">Choose bike</li>
                            <li className="step">Book</li>
                            <li className="step">Receive bike</li>
                        </ul>
                    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;