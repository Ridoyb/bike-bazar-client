import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo.png'

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <div>
                    <img className='h-20' src={logo} alt="" />
                    <p className='text-2xl'>Bike Bazar</p>
                    <p >Providing reliable bike since 1992</p>
                </div> 
                <div>
                    <span className="footer-title">Services</span> 
                    <a className="link link-hover">Branding</a> 
                    <a className="link link-hover">Design</a> 
                    <a className="link link-hover">Marketing</a> 
                    <a className="link link-hover">Advertisement</a>
                </div> 
                <div>
                    <span className="footer-title">Company</span> 
                    <a className="link link-hover">About us</a> 
                    <a className="link link-hover">Contact</a> 
                    <a className="link link-hover">Jobs</a> 
                    <a className="link link-hover">Press kit</a>
                </div> 
                <div>
                    <span className="footer-title">Legal</span> 
                    <a className="link link-hover">Terms of use</a> 
                    <a className="link link-hover">Privacy policy</a> 
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
            <div className='pb-4 bg-base-200'>
                <p  className='text-center' >Copyright © 2022 - All right reserved</p>
            </div>
        </div>
        
    );
};

export default Footer;