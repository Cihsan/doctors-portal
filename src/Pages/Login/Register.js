import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase_init';
import useToken from '../../hooks/useToken';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [loginGoogle, userLoginGoogle, loadingLoginGoogle, errLoginGoogle] = useSignInWithGoogle(auth);
    const [newUserEmail, userNewEmail, loadingNewEmail, errorNewEmail] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [profileUpdate, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate()
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    //return coming path
    const [token] = useToken(userLoginGoogle || userNewEmail)
    if (token) {
        navigate(from, { replace: true });
    }
    //Loading 
    let spinner;
    if (loadingLoginGoogle || loadingNewEmail || updating) {
        spinner = <div class="flex items-center justify-center ">
            <div class="w-16 h-16 border-b-2 border-primary border-dashed rounded-full animate-spin"></div>
        </div>
    }

    //Erorr
    let errorMassage
    if (errLoginGoogle || errorNewEmail || updateError) {
        errorMassage =
            <div class="alert alert-warning shadow-lg">
                <div className=''>
                    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                    <span>
                        {errorNewEmail?.message}
                        {errLoginGoogle?.message}
                        {updateError?.message}
                    </span>
                </div>
            </div>
    }

    //React-hook-form

    const onSubmitReg = async (data) => {
        const name = data.name
        await newUserEmail(data.email, data.pass)
        await profileUpdate({ displayName: name })
        data.target.reset()
    }

    return (
        <div>
            {errorMassage}
            {spinner}
            <div className="hero min-h-screen">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className='text-center text-3xl'>Register</h1>
                    <form onSubmit={handleSubmit(onSubmitReg)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input {...register("name", { required: true })} type="text" placeholder="Your Name" className="input input-bordered" />
                            <span className='text-red-200'>{errors.name?.type === 'required' && "Required"}</span>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("email", { required: true })} type="email" placeholder="email" className="input input-bordered" />
                            <span className='text-red-200'>{errors.email?.type === 'required' && "Required"}</span>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input {...register("pass", { required: true })} type="password" placeholder="password" className="input input-bordered" />
                            <span className='text-red-200'>{errors.pass?.type === 'required' && "Required"}</span>
                        </div>
                        <div className="form-control mt-2">
                            {/* <input className="btn btn-accent" type="submit" value="Login" /> */}
                            <button type='submit' className="btn btn-accent">Register</button>
                        </div>
                        <div class="flex flex-col w-full border-opacity-50">
                            <div class="grid rounded-box place-items-center">
                                <span><button onClick={() => navigate('/login')} className="label-text-alt link">Are You User Doctors Portal?</button></span>
                            </div>
                            <div class="divider">OR</div>
                            <div class="grid rounded-box place-items-center">
                                <button onClick={() => loginGoogle()} className='btn btn-outline btn-accent my-2 mb-5 mx-10'>Login with Google</button>
                            </div>
                        </div>

                    </form>
                    {/* <button onClick={() => loginGoogle()} className='btn btn-secondary my-2 mx-10'>Login with Google</button> */}
                </div>
            </div>
        </div>
    );
};

export default Register;