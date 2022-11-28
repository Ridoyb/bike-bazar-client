import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {

    const {name}= useLoaderData();
    console.log(name)
    return (
        <div>
            <h3 className='text-3xl text-center mt-12'>Payment</h3>
        </div>
    );
};

export default Payment;