import React, { useEffect } from 'react';
import './OurMainPriority.css';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import chair from '../../../files/images/chair.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
const OurMainPriority = () => {
    useEffect(() =>{
        AOS.init();
    },[]);
    return (
        <div className='our-main-priority'> 
            <div class="container">
                <div class="row py-5 flexible">
                    <div class="col-md-6" data-aos="fade-down" data-aos-delay="500">
                        <h1>Your Peace Of Mind is Our Main Priority</h1>
                        <hr className='our-main-priority-hr'/>
                        <h4 className='text-secondary'>If you hire us, we promise to:</h4>
                        <div className='my-3'>
                            <div class="priority-content-flexible">
                                <ThumbUpAltIcon className='our-main-priority-check'/>
                                <h5>Always be there on time each time.</h5>
                            </div>
                            <div class="priority-content-flexible">
                                <ThumbUpAltIcon className='our-main-priority-check'/>
                                <h5>Send clean, well maintained moving trucks of all size to best serve your needs.</h5>
                            </div>
                            <div class="priority-content-flexible">
                                <ThumbUpAltIcon className='our-main-priority-check'/>
                                <h5>Will guarantee a smooth transition to your new apartment or house with our professional trained staff.</h5>
                            </div>
                            <div class="priority-content-flexible">
                                <ThumbUpAltIcon className='our-main-priority-check'/>
                                <h5>Absolutely no surprises at the end. We are completely upfront with quotes and include absolutely everything.</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6" data-aos="fade-up" data-aos-delay="500">
                        <img className='img-fluid' src={chair} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurMainPriority;