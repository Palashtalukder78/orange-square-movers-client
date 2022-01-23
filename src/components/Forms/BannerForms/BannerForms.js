import { TextField } from '@mui/material';
import React from 'react';
import './BannerForm.css';
import trucks from '../../../files/images/truck.gif'

const BannerForms = () => {
    
    return (
        <div id="banner-form">
            <div className='text-center'>
                <img className='truck-gif' src={trucks} alt="" />
            </div>
            <form>
                <div className='form-fields'>
                    <TextField className="orange-field mb-3" id="outlined-basic" label="Name" variant="outlined" />
                    <div class="row">
                        <div class="col-md-6">
                            <TextField className="orange-field mb-3" id="outlined-basic" label="Email" variant="outlined" />
                        </div>
                        <div class="col-md-6">
                            <TextField className="orange-field mb-3" id="outlined-basic" label="Phone Number" variant="outlined" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6" >
                            <TextField className="orange-field mb-3" id="outlined-basic" label="From" variant="outlined" />
                        </div>
                        <div class="col-md-6">
                            <TextField className="orange-field mb-3" id="outlined-basic" label="To" variant="outlined" />
                        </div>
                    </div>
                    <div className='d-grid'>
                        <button className='my-btn'>Get Free Quote</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default BannerForms;