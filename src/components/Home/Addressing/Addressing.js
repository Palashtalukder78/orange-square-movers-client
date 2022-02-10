import React, { useEffect } from 'react';
import './Addressing.css';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TimerIcon from '@mui/icons-material/Timer';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Addressing = () => {
    useEffect(() =>{
        AOS.init();
    },[]);
    return (
        <div className='addressing' data-aos="fade-down" data-aos-delay="500">
            <div class="container">
                <div className='opening-and-phone-number'>
                    <h5>Mon-Fri 9AM-5PM | | Saturday 9am-12:00pm | | Sunday and Holidays Closed</h5>
                    <h1>
                        <CallIcon className='addressing-call-icon'/>
                        720-912-3359
                    </h1>
                </div>
                <div class="row mt-3">

                    <div class="col-md-3">
                         <div className='flexible-info'>
                             <div className='me-3'>
                                <LocationOnIcon className='icon'/>
                             </div>
                             <div>
                                 <h5>Our Location</h5>
                                 <p>
                                    600 17th Street, #2800,
                                    <br />
                                    Denver, CO 80202
                                 </p>
                             </div>
                         </div>
                    </div>
                    
                    <div class="col-md-3">
                         <div className='flexible-info'>
                             <div className='me-3'>
                                <TimerIcon className='icon'/>
                             </div>
                             <div>
                                 <h5>Working Hours</h5>
                                 <p>
                                    Mon-Fri 9AM-5PM || Saturday 9am-12:00pm ||
                                    Sunday and Holidays Closed
                                 </p>
                             </div>
                         </div>
                    </div>

                    <div class="col-md-3">
                         <div className='flexible-info'>
                             <div className='me-3'>
                                <PhoneAndroidIcon className='icon'/>
                             </div>
                             <div>
                                 <h5>Office Phone</h5>
                                 <p>
                                    720-912-3359
                                 </p>
                             </div>
                         </div>
                    </div>
                    <div class="col-md-3">
                         <div className='flexible-info'>
                             <div className='me-3'>
                                <EmailIcon className='icon'/>
                             </div>
                             <div>
                                 <h5>Office Phone</h5>
                                 <p>
                                    Info@orangesquaremovers.com
                                 </p>
                             </div>
                         </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Addressing;