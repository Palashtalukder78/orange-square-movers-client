import React from 'react';
import './WhyChooseUs.css';
import photo1 from '../../../files/images/why-choose-us-1.jpg';
import photo2 from '../../../files/images/why-choose-us-2.png';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import ScheduleIcon from '@mui/icons-material/Schedule';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
const WhyChooseUs = () => {
    return (
        <div class="container">
            <div class="row flexible">
                <div class="col-md-6 mb-3">
                    <img className='img-fluid' src={photo1} alt="" />
                    <img className='img-fluid' src={photo2} alt="" />
                </div>
                <div class="col-md-6">
                    <div>
                        <h3 className='my-heading'>Why Choose Us?</h3>
                        <div className='my-4'>
                            <div className='flexible my-4'>
                                <div className='m-2'>
                                    <PriceCheckIcon className='why-choose-us-icon' />
                                </div>
                                <div>
                                    <h4 className='thick'>Simple, Up-Front Pricing</h4>
                                    <p className='thick'>Price doesn't suddenly change on move day. The price you see today is the price you pay for the hours you use—no extra fees or charges.</p>
                                </div>
                            </div>
                            <div className='flexible my-4'>
                                <div className='m-2'>
                                    <ScheduleIcon className='why-choose-us-icon' />
                                </div>
                                <div>
                                    <h4 className='thick'>Easy Schedule</h4>
                                    <p className='thick'>Select your preferred times, book, then sit back</p>
                                </div>
                            </div>
                            <div className='flexible my-4'>
                                <div className='m-2'>
                                    <PriceChangeIcon className='why-choose-us-icon' />
                                </div>
                                <div>
                                    <h4 className='thick'>Cost-Effective</h4>
                                    <p className='thick'>We provide a below market price— and make sure you get trained, friendly, honest, professionals movers as well. With no surprises</p>
                                </div>
                            </div>
                            <div className='flexible my-4'>
                                <div className='m-2'>
                                    <ThumbUpAltIcon className='why-choose-us-icon' />
                                </div>
                                <div>
                                    <h4 className='thick'>Happiness guaranteed</h4>
                                    <p className='thick'>We are here with you to ensure the job gets done to your satisfaction</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;