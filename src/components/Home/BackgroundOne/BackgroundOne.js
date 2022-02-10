import React, { useEffect } from 'react';
import './BackgroundOne.css';
import CallIcon from '@mui/icons-material/Call';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import AOS from 'aos';
import 'aos/dist/aos.css';
const BackgroundOne = () => {
    useEffect(() =>{
        AOS.init();
    },[]);
    return (
        <div className="background-one text-light" data-aos="fade-down" data-aos-delay="500">
            <div className='container'>
                    <h5>Mon-Fri 9AM-5PM | | Saturday 9am-12:00pm | | Sunday and Holidays Closed</h5>
                    <h1>
                        <CallIcon className='call-icon'/>
                        720-912-3359
                    </h1>
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
    );
};

export default BackgroundOne;