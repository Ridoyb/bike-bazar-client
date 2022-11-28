import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BookModal from './BookModal';

const AllProductsCard = ({product}) => {
    const{img,title,location,category,originalPrice,resalePrice,sellerName,used,posted}=product;
    const [bikeData, setBikeData] = useState(null);
    // console.log(bikeData)

    const {_id}= product;
   
    

    return (
        <div className="card w-90  mx-4  bg-base-100 shadow-2xl  home-card ">
            <figure className="px-10 pt-10">
                <img alt="" src={img} className="rounded-2xl w-25" />
                
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-3xl mb-8">{title}</h2>
                <p>Location: {location}</p>
                <p>Original Price: ${originalPrice}</p>
                <p>Resale Price: ${resalePrice}</p>
                <p>Used: {used}</p>
                <p>Posted: {posted}</p>
                <p>Seller Name: {sellerName}</p>
                <div className="">
                <Link ><button onClick={() => setBikeData(product)}
              htmlFor="booking-modal" className="btn btn-outline mt-8 ml-2">Book Now</button></Link>
                </div>
            </div>

            {bikeData && <>
                <BookModal
            bikeData={bikeData}
            setBikeData={setBikeData}
          ></BookModal></>}
        </div>
    );
};

export default AllProductsCard;