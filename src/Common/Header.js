import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../firebase_init';

const Header = () => {
    const [user] = useAuthState(auth);
    console.log(user);
    const logOut = () => {
        signOut(auth)
        localStorage.removeItem('accessToken')
    }
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabindex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink to='/home'>Home</NavLink></li>
                            {/* <li><NavLink to='/about'>About</NavLink></li> */}
                            <li><NavLink to='/appointment'>Appointment</NavLink></li>
                            {/* <li><NavLink to='/contact'>Contact Us</NavLink></li> */}
                            {
                                user && <li><NavLink to='/dashboard'>Dash Board</NavLink></li>
                            }

                            {
                                user ?
                                    <div class="dropdown dropdown-end">
                                        <label tabindex="0" class="btn btn-ghost avatar">
                                            <div class="w-10 rounded-full">
                                                <span>{user.displayName}</span>
                                            </div>
                                        </label>
                                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                            <li><button onClick={logOut}>Sign Out</button></li>
                                        </ul>
                                    </div>
                                    : <li><NavLink to='/login'>Login</NavLink></li>
                            }
                        </ul>
                    </div>
                    <NavLink to='/' className="btn btn-ghost normal-case text-xl">Doctors Portal</NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><NavLink to='/home'>Home</NavLink></li>
                        {/* <li><NavLink to='/about'>About</NavLink></li> */}
                        <li><NavLink to='/appointment'>Appointment</NavLink></li>
                        {/* <li><NavLink to='/contact'>Contact Us</NavLink></li> */}
                        {
                            user && <li><NavLink to='/dashboard'>DashBoard</NavLink></li>
                        }
                        {
                            user ?
                                <div class="dropdown dropdown-end">
                                    <label tabindex="0" class="btn btn-ghost avatar">
                                        <div class="w-10 rounded-full">
                                            {user.displayName}
                                        </div>
                                    </label>
                                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                        <li><button onClick={logOut}>Sign Out</button></li>
                                    </ul>
                                </div>
                                : <li><NavLink to='/login'>Login</NavLink></li>
                        }
                        <div className="navbar-end">
                            <label tabIndex="1" for="my-drawer-2" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                        </div>
                    </ul>

                </div>

            </div>

        </div>
    );
};

export default Header;