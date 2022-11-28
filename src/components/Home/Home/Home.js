import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Advertise from '../../Advertise/Advertise';

import CategoryCard from './CategoryCard';


const Home = () => {

    // const {_id}= product;

    // const [categories, setCategories] = useState([]);
    // useEffect(() => {
    //     fetch('https://bike-bazar-server-nine.vercel.app/categories')
    //         .then(res => res.json())
    //         .then(data => setCategories(data));
    // }, [])

    const categories = useLoaderData();



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
            <div className='text-center '>
                <h1 className="text-5xl font-bold title ">Top Categories</h1>
                <div className='grid justify-center m-auto justify-items-center gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 container mx-auto '>
                    {
                        categories.map(category => <CategoryCard
                            key={category._id}
                            category={category}

                        ></CategoryCard>)
                    }
                </div>
            </div>

            <div className="hero mt-8 mb-8">
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

            <Advertise></Advertise>
        </div>
    );
};

export default Home;