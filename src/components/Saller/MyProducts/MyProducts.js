import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState, useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';



const MyProducts = () => {
    const { user } = useContext(AuthContext);


    console.log('email', user?.email)

    // handleAdvertiseItem
  const handleAdvertiseItem = (product) => {
    const advertise = {
      productName: product.name,
      Photo: product.img,
      originalPrice: product.originalPrice,
      sellerName: product.sellerName,
      resalePrice: product.resalePrice,
      location: product.location,
      condition: product.condition,
      used: product.used,
    };
    // console.log(advertise);
    fetch('http://localhost:5000/advertise', {
        method: 'POST',
        headers: {
            
            
        },
        body: JSON.stringify(product)
    })
        .then(res => res.json())
        .then(result => {
            if (result.acknowledged) {
                toast.success('Your Product Has Added Successfully');
            }
            console.log(result)
        })
  };




    const { data: myProducts = [], isLoading, refetch } = useQuery({
        queryKey: ['myProducts'],
        queryFn: async () => {
            try {
                const res = await fetch(`http://localhost:5000/my-products/${user?.email}`);
                const data = await res.json();
                return data;
                console.log(data)
            }
            catch (error) {
                console.log(error);
            }
        }
    })







    // delete product

    const handleDelete = product => {
        fetch(`http://localhost:5000/my-products/${product._id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {

                if (data.acknowledged) {
                    toast.success('Product Deleted Successfully')
                    refetch();
                }

                
            })

    }

    // 
    return (
        <div>
            <h2 className='text-3xl text-center font-semibold  mt-10'>My products</h2>

            <div>
                {
                    myProducts.length === 0 ? <h2 className='text-3xl font-semibold mt-10 text-center'>You Have not any Products</h2> :
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 m-5 md:m-20'>
                            {
                                myProducts.map(product => <div key={product._id} className="card w-full shadow-xl">
                                    <figure><img className='w-full h-96' src={product.photo} alt="Products" /></figure>
                                    <div className="card-body">
                                        <h2 id='name' className="card-title">{product.name}</h2>
                                        <h2 className='text-xl'>Seller Name: <span className='font-semibold  '>{product.salerName}</span></h2>
                                        <h2 className='text-xl'>Sale Price: <span className='font-semibold '>{product.resalePrice} BDT</span></h2>
                                        <div className='flex justify-evenly mt-10'>

                                            <Link onClick={() => handleDelete(product)}>
                                                <button className="btn bg-red-700">Delete</button>

                                            </Link>
                                            <Link>
                                                <button className="btn bg-green-800">Available</button>
                                            </Link>
                                            
                                            <button
                                            onClick={() => handleAdvertiseItem(product)}
                                            className="btn btn-primary btn-xs"
                                            >
                                            Advertise
                                            </button>
                                           
                                        </div>

                                    </div>
                                </div>)
                            }
                        </div>
                }
            </div>
        </div>
    );
};

export default MyProducts;