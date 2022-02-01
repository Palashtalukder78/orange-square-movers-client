import React, { useEffect } from 'react';
import './Services.css';
import PopupForm from '../../Forms/PopupForm/PopupForm';
import useAuth from '../../../hooks/useAuth';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Services = () => {
    const {allServices} = useAuth();
    const {services} = allServices;
    useEffect(() =>{
        AOS.init();
    },[]);
    return (
        <div className='mb-5' >
            <h2 className='my-heading'>Our Services</h2>
            <div className="container">
                <div className="row" data-aos="fade-down" data-aos-delay="500">
                {
                    services.map(service => (
                        <div className="col-md-4 my-3">
                            <div className="card" style={{backgroundImage:`url(${service.photo})`, backgroundPosition:"center"}}>
                                <div className="card-content">
                                    <h4 className="card-title">{service.service_name}</h4>
                                    <p className="card-body">
                                            {service.description.slice(0,100)}...
                                    </p>
                                    <button type="button" className='my-btn' data-toggle="modal" data-target="#exampleModalCenter">Learn More</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
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

export default Services;