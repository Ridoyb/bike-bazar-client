import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {

    const { id, name, img } = category;
    console.log(category)

    return (


        <div className="card w-90  mx-4  bg-base-100 shadow-xl  home-card ">
            <figure className="px-10 pt-10">
                <img alt="" src={img} className="rounded-2xl" />

            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-3xl mb-8">{name}</h2>
                <div className="">
                    <Link to={`/products/${name}`} ><button className="btn btn-outline mt-8 ml-2">VIEW ALL</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;