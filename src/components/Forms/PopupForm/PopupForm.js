import { TextField } from '@mui/material';
import React from 'react';
import './PopupForm.css'
const PopupForm = () => {
    return (
        <div>
            <form>
                <div class="row">
                    <div class="col-md-6">
                        <TextField className="popup-form-field" id="standard-basic" label="Full Name" variant="standard" />
                    </div>
                    <div class="col-md-6">
                        <TextField type="number" className="popup-form-field" id="standard-basic" label="Phone Number" variant="standard" />
                    </div>
                    <div className='my-3 text-right'>
                        <button className='my-btn'>Order A Call</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default PopupForm;