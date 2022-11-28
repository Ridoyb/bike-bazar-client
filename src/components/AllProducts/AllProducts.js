import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookModal from './BookModal';

const AllProducts = () => {
    const products = useLoaderData();
    const [bikeData, setBikeData] = useState("");
    console.log(bikeData);

    return (
        <div>
            <h1 className=" my-3 text-center text-4xl font-bold">
                Products on {products[0].category}
            </h1>
            <div className=" my-12 grid md:grid-cols-3 grid-cols-1 gap-4 mt-6">
                {products.map((product) => (
                    <div
                        key={product._id}
                        className="p-4 shadow-xl shadow-indigo-300/50 rounded-lg"
                    >
                        <img
                            className="w-96 h-72 mx-auto"
                            src={product.img}
                            alt="brand logo"
                        />
                        <h2 className="text-center text-3xl my-2 font-bold">
                            {product.title}
                        </h2>
                        <p className="text-center font-medium text-2xl my-2">
                            Original Price : $ {product.originalPrice}
                        </p>
                        <p className="text-center font-medium text-2xl my-2">
                            Resale Price : $ {product.resalePrice}
                        </p>
                        <p className="text-center font-bold">
                            Location : {product.location}
                        </p>
                        <p className="text-center font-bold">
                            Product Used : {product.used} year/month
                        </p>
                        <p className="text-center font-bold">
                            Seller Name : {product.sellerName}
                        </p>
                        <label
                            onClick={() => setBikeData(product)}
                            htmlFor="booking-modal"
                            className="my-4 text-2xl font-semibold mx-auto w-full btn btn-outline"
                        >
                            Book Now
                        </label>
                    </div>
                ))}
            </div>
            {bikeData && (
                <BookModal
                    bikeData={bikeData}
                    setBikeData={setBikeData}
                ></BookModal>
            )}
        </div>
    );
};

export default AllProducts;