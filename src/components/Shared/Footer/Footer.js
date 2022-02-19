import React from 'react';
import './Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className='footer text-light py-5'>
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <div>
                            <h3>About Us</h3>
                            <hr className='footer-hr'/>
                            <p>Hiring a team you can trust is everything when you are thinking about your next big move. Hiring family run business Orange Square Movers means you are hiring a team of professionals who will treat your personal belongings and family as if they were their own.</p>

                            <div className='social-icons'>
                                <a href="https://web.facebook.com/OrangeSquareMovers" target="_blank" rel="noreferrer">
                                    <FacebookIcon className='background-social-icon'/>
                                </a>
                                <a href="https://www.instagram.com/orangesquaremovers/" target="_blank" rel="noreferrer">
                                    <InstagramIcon className='background-social-icon'/>
                                </a>
                                <a href="https://www.youtube.com/channel/UCPUUh3ucJVuWGpY-CFupZmQ/featured?app=desktop" target="_blank" rel="noreferrer">
                                    <YouTubeIcon className='background-social-icon'/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <h3>Popular Category</h3>
                        <hr className='footer-hr'/>
                        <div>
                            <Link className='footer-menu' to='/local-moving'>Local Moving</Link>
                            <hr />
                            <Link className='footer-menu' to='/local-moving'>Long Distance Relocation</Link>
                            <hr />
                            <Link className='footer-menu' to='/local-moving'>Storage</Link>
                            <hr />
                            <Link className='footer-menu' to='/local-moving'>Packing Supplies</Link>
                            <hr />
                            <Link className='footer-menu' to='/local-moving'>Free Quote</Link>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <h3>Call Center</h3>
                        <hr className='footer-hr'/>
                        <h2>720-912-3359</h2>
                        <h4>and get a free estimate</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;