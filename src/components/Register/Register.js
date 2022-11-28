import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate, } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Register = () => {

    const location = useLocation();
    const form = location.state?.from?.pathname || '/';
    const [error, setError] = useState('');
    const nevigate = useNavigate();
    const { createUser, setLoading, updateUserProfile } = useContext(AuthContext);
    const [checked, setChecked] = useState(false);




    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        const check = form.check.checked;

        console.log(name, photoURL, email, password, check)


        setChecked(current => !current);



        const formData = new FormData()
        formData.append('image', photoURL)

        const url = "https://api.imgbb.com/1/upload?key=caa001a7f87321e4ae150f1e326e9d43"
        fetch(url, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(imageData => {

                if (imageData.success) {

                    const userInfo = {
                        displayName: name,
                        photoURL: imageData.data.url,
                        email,
                        check
                    }
                    console.log(userInfo)


                    fetch('http://localhost:5000/users', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',

                        },
                        body: JSON.stringify(userInfo)
                    })
                        .then(res => res.json())
                        .then(result => {
                            if (result.acknowledged) {
                                toast.success(`${name} is Added Successfully`);
                                nevigate('/')

                            }
                            //console.log(result)
                        })
                }





                createUser(email, password)
                    .then(result => {
                        setError('');
                        updateUserProfile(name, imageData.data.url)
                            .then(() => {
                                form.reset();
                                nevigate(form, { replace: true })
                                nevigate('/')



                            })
                            .catch(error => setError(error.message))
                    })
                    .catch(error => {
                        console.error('create user account error', error)
                        setError(error.message);
                        setLoading(false)
                    })

            })
            .catch(err => {
                toast.error(err.message)
            })
    }


    return (
        <div>
            <div className="hero mb-12  mt-12  ">
                <div className="hero-content   ">
                    <div className="card  w-100  max-w-sm shadow-2xl bg-base-100">
                        <h1 className="text-5xl font-bold text-center pt-4">Register</h1>
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">

                                <input type="text" name='name' placeholder="Your Full Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <input type="text" name='photoURL' placeholder="Photo URL" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <input type="password" name='password' placeholder="Password" className="input input-bordered" required />

                            </div>



                            <div className="form-control my-5">
                                <label className="label cursor-pointer justify-start">
                                    <input
                                        name="check"
                                        type="checkbox"
                                        value={checked}
                                        className="checkbox"
                                    />
                                    <span className="ml-5">
                                        I want to be a seller.
                                    </span>
                                </label>
                            </div>

                            <div className="form-control mt-6">
                                <input className="btn btn-outline" type="submit" value="Register" />
                                <p className=' mt-2'>Already Registered? <Link to='/login' className='link'>LogIn</Link></p>
                            </div>
                            <p className='text-danger'>{error}</p>

                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Register;