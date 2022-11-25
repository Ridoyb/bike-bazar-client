import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div className="hero mb-12  mt-12  ">
                <div className="hero-content   ">
                    <div className="card  w-100 border max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-bold text-center pt-4">Register</h1>
                    <form  className="card-body">
                        <div className="form-control">
                        
                        <input type="text" name='name' placeholder="Your Full Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <input type="text" name='photoURL' placeholder="Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <input type="email" name='email' placeholder="Email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <input type="password" name='password' placeholder="Password" className="input input-bordered" required/>
                        
                        </div>
                        <div className="form-control mt-6">
                        <input className="btn btn-outline" type="submit" value="Register" />
                        <p className=' mt-2'>Already Registered? <Link to='/login' className='link'></Link></p>
                        </div>
                        
                    </form>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default Register;