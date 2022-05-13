import React from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate()

    const register = (event) => {
        event.preventDefault()
        const email = event.target.email.value
        const pass = event.target.pass.value
        //(email,pass)
        console.log(email, pass);
    }
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className='text-center text-3xl'>Register</h1>
                    <form onSubmit={register} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
                        </div>
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


                        </div>
                        <div className="form-control mt-2">
                            {/* <input className="btn btn-accent" type="submit" value="Login" /> */}
                            <button type='submit' className="btn btn-accent">Register</button>
                        </div>
                        <div class="flex flex-col w-full border-opacity-50">
                            <div class="divider">OR</div>
                            <div class="grid h-5 rounded-box place-items-center">
                            <span><button onClick={() => navigate('/login')} className="label-text-alt link">Are You User Doctors Portal?</button></span>
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