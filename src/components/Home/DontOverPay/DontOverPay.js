import React, { useEffect } from 'react';
import './DontOverPay.css';
import photo1 from '../../../files/images/dont over pay 1.jpg';
import photo2 from '../../../files/images/dont over pay 2.jpg';
import PopupForm from '../../Forms/PopupForm/PopupForm';
import AOS from 'aos';
import 'aos/dist/aos.css';
const DontOverPay = () => {
    useEffect(() =>{
        AOS.init();
    },[]);
    return (
        <div className='dont-over-pay mb-5'>
            <div class="container">
                <div class="row flexible">
                    <div class="col-md-6" data-aos="fade-right" data-aos-delay="300">
                        <img className='img-fluid' src={photo1} alt="" />
                        <img className='img-fluid' src={photo2} alt="" />
                    </div>
                    <div class="col-md-6" data-aos="fade-left" data-aos-delay="300">
                        <h1>Don’t over pay for your move</h1>
                        <hr className='our-main-priority-hr'/>
                        <p>
                            You wouldn’t take your Mercedes to a Honda mechanic.So why would you trust your entire home to someone from the internet?
                        </p>
                        <p>
                            Moving doesn’t have to be stressful.
                        </p>
                        <p>
                            Our customers have called us “the best planner for moving.” Because our clients’ homes are so large, complex, and ﬁlled with treasures, it takes more than just two guys and a truck to get the job done, which is why we hire and partner only best guys.
                        </p>
                        <p>
                            We really, really enjoy what we do. There’s a certain satisfaction that comes with helping our clients depart one home and begin building their life in a new one.
                        </p>
                        <p>
                            It’s never too early to start planning your relocation. The sooner you start, the smoother it will go, even if there are still a few “unknowns” (including your new address)
                        </p>
                        <button type="button" className='my-btn' data-toggle="modal" data-target="#exampleModalCenter">Learn More</button>
                    </div>
                </div>
                
                <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className='p-1'>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-header text-center">
                                <div className='popup-header'>
                                    <h3 className="modal-title text-center">
                                    Order a call now and Get $30 Discount
                                    </h3>
                                    <h6>Our Representatives will connect with you During 15 minutes</h6>
                                </div>
                            </div>
                        <div className="modal-body">
                            <PopupForm></PopupForm>
                        </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DontOverPay;