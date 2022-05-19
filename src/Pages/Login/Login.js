import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../src/firebase_init';
import { useForm } from "react-hook-form";
import useToken from '../../hooks/useToken';

const Login = () => {
    const [emailPassLogin, emailPassLoginUser, emailPassLoginLoading, emailPassLoginError] = useSignInWithEmailAndPassword(auth);
    const [loginGoogle, userLoginGoogle, loadingLoginGoogle, errLoginGoogle] = useSignInWithGoogle(auth);
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();

    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [token] = useToken(userLoginGoogle)
    if (token || emailPassLoginUser) {
        navigate(from, { replace: true });
    }
    //Loading 
    let spinner;
    if (loadingLoginGoogle || emailPassLoginLoading) {
        spinner = <div class="flex items-center justify-center ">
            <div class="w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin"></div>
        </div>
    }

    //Erorr
    let errorMassage
    if (errLoginGoogle || emailPassLoginError) {
        errorMassage =
            <div class="alert alert-warning shadow-lg">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                    <span>
                        {emailPassLoginError?.message}
                        {errLoginGoogle?.message}
                    </span>
                </div>
            </div>
    }

    //React-hook-form

    const onSubmit = data => {
        emailPassLogin(data.email, data.pass)
    }
    return (
        <div>
            {errorMassage}
            {spinner}
            <div className="hero min-h-screen">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className='text-center text-3xl'>Login</h1>
                    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("email", { required: true })} type="email" placeholder="email" className="input input-bordered" />
                            <span className='text-red-200'>{errors.email?.type === 'required' && "Email is required"}</span>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input {...register("pass", { required: true })} type="password" placeholder="password" className="input input-bordered" />
                            <span className='text-red-200'>{errors.pass?.type === 'required' && "password is required"}</span>
                            <label className="label">
                                <button className="label-text-alt link link-hover">Forgot password?</button>
                            </label>

                        </div>
                        <div className="form-control mt-2">
                            <button type='submit' className="btn btn-accent">Login</button>
                        </div>
                        <div class="flex flex-col w-full border-opacity-50">
                            <div class="divider">OR</div>
                            <div class="grid rounded-box place-items-center">
                                <label className="label">
                                    <button onClick={() => navigate('/register')} className="label-text-alt link link-hover">New to Doctors Portal?</button>
                                </label>
                                <button onClick={() => loginGoogle()} className='btn btn-outline btn-accent my-2 mb-5 mx-10'>Login with Google</button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;
