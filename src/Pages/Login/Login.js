import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../src/firebase_init';
const Login = () => {
    const [emailPassLogin,/*  emailPassLoginUser, emailPassLoginLoading, emailPassLoginError */] = useSignInWithEmailAndPassword(auth);
    const [loginGoogle, /* userLoginGoogle, loadingLoginGoogle, errLoginGoogle */] = useSignInWithGoogle(auth);
    const navigate = useNavigate()

    console.log(emailPassLogin);
    const login = (event) => {
        event.preventDefault()
        const email = event.target.email.value
        const pass = event.target.pass.value
        emailPassLogin(email, pass)
        console.log(email, pass);
    }
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className='text-center text-3xl'>Login</h1>
                    <form onSubmit={login} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='pass' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <button className="label-text-alt link link-hover">Forgot password?</button>
                            </label>
                            
                        </div>
                        <div className="form-control mt-2">
                            <button type='submit' className="btn btn-accent">Login</button>
                        </div>
                        <div class="flex flex-col w-full border-opacity-50">
                            <div class="divider">OR</div>
                            <div class="grid h-5 rounded-box place-items-center">
                            <label className="label">
                                <button onClick={() => navigate('/register')} className="label-text-alt link link-hover">New to Doctors Portal?</button>
                            </label>
                                <button onClick={() => loginGoogle()} className='btn btn-secondary my-2 mb-5 mx-10'>Login with Google</button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;
