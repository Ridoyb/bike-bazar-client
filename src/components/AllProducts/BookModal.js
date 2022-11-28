import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';



const BookModal = ({ bikeData, setBikeData }) => {
    const { user } = useContext(AuthContext);
    const { displayName, email, photoURL } = user
    const { title, originalPrice, photo } = bikeData;
    console.log(bikeData)

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const Price = form.Price.value;
        const buyername = form.buyername.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const location = form.location.value;

        const booking = {
            buyername, photo, photoURL, name, Price, email, phone, location
        };

        fetch('https://bike-bazar-server-nine.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Your booking successfully!')
                    setBikeData(null)
                    form.reset()
                }
            })


    }


    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label onClick={() => setBikeData(null)} htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>


                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input name="name" type="text" readOnly defaultValue={title} placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="Price" type="text" readOnly defaultValue={originalPrice} placeholder="Price" className="input w-full input-bordered" />
                        <input name="buyername" type="text" readOnly defaultValue={displayName} placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="email" type="email" readOnly defaultValue={email} placeholder="Email Address" className="input w-full input-bordered" />
                        <input name="photo" type="text" readOnly defaultValue={photoURL} placeholder="Image url" className="input w-full input-bordered" />
                        <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <input name="location" type="text" placeholder="Location" className="input w-full input-bordered" />
                        <br />
                        <input className='btn btn-primary w-full' type="submit" value="Book Now" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookModal;