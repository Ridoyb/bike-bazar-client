import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import toast from 'react-hot-toast';

const Login = () => {

    const [error, setError] = useState('');
    const { signIn, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)


        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                navigate(from, { replace: true });

            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }
    const { providerLogin } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                if (result.user.uid) {
                    toast.success("Login Successful");
                    const userInfo = {
                        displayName: result.user.displayName,
                        photoURL: result.user.photoURL,
                        email: result.user.email,
                        check: false,
                    };

                    fetch("https://bike-bazar-server-nine.vercel.app/users", {
                        method: "POST",
                        headers: {
                            "content-type": "application/json",

                        },
                        body: JSON.stringify(userInfo),
                    })
                        .then((res) => res.json())
                        .then((result) => {


                        });

                }
                setError("");

                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))

    }



    return (
        <div>
            <div className="hero mb-12  mt-12  ">
                <div className="hero-content   ">
                    <div className="card flex-shrink-0 w-100 border max-w-sm shadow-2xl bg-base-100">
                        <h1 className="text-5xl font-bold text-center pt-4">Login</h1>
                        <div>
                            <form onSubmit={handleSubmit} className="card-body">
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
                            <button onClick={handleGoogleSignIn} className="btn btn-outline gap-2 mt-8">
                                <FaGoogle className='mx-2'></FaGoogle>
                                LogIn With Google
                            </button>
                        </div>

                        <p className='text-danger'>{error}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;