import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";

const Login = () => {
    return (
        <div>
            <div className="hero mb-12  mt-12  ">
                <div className="hero-content   ">
                    <div className="card flex-shrink-0 w-100 border max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-bold text-center pt-4">Login</h1>
                    <div>
                    <form  className="card-body">
                        <div className="form-control">
                            
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-outline" type="submit" value="Login" />
                        </div>
                    </form>
                        
                        <p className=' mt-2 text-center'>Didn't register? <Link to='/register' className='link'>Register Now</Link></p>
                        </div>

                        
                        <fieldset class="border-t border-slate-300 mt-4">
                            <legend class="mx-auto px-4 text-white text-2xl italic">OR</legend>
                        </fieldset>

                        <div className='text-center mb-12'>
                            <button  className="btn btn-outline gap-2 mt-8">
                            <FaGoogle className='mx-2'></FaGoogle>
                                LogIn With Google
                            </button>
                        </div>
                        
                        <p className='text-danger'>Error</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;