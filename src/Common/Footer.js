import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer class="footer p-10 text-neutral-content text-accent">
                <div>
                    <span class="footer-title">Services</span>
                    <NavLink to='/' class="link link-hover">Branding</NavLink>
                    <NavLink to='/' class="link link-hover">Design</NavLink>
                    <NavLink to='/' class="link link-hover">Marketing</NavLink>
                    <NavLink to='/' class="link link-hover">Advertisement</NavLink>
                </div>
                <div>
                    <span class="footer-title">Company</span>
                    <NavLink to='/' class="link link-hover">About us</NavLink>
                    <NavLink to='/' class="link link-hover">Contact</NavLink>
                    <NavLink to='/' class="link link-hover">Jobs</NavLink>
                    <NavLink to='/' class="link link-hover">Press kit</NavLink>
                </div>
                <div>
                    <span class="footer-title">Legal</span>
                    <NavLink to='/' class="link link-hover">Terms of use</NavLink>
                    <NavLink to='/' class="link link-hover">Privacy policy</NavLink>
                    <NavLink to='/' class="link link-hover">Cookie policy</NavLink>
                </div>
            </footer>
            <div className='text-center pb-8'>
                <p>Copyright © 2022 All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;