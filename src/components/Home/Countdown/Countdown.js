import React from 'react';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import ContentCutOutlinedIcon from '@mui/icons-material/ContentCutOutlined';
import './Countdown.css';
const Countdown = () => {
    return (
        <div className='row countdown'>
            <div class="col-md-3 countdown-one">
                <div class="countdown-flexible">
                    <Inventory2Icon className='countdown-icon'/>
                    <h1>134324</h1>
                    <h4>BOXES MOVED</h4>
                </div>
            </div>
            <div class="col-md-3 countdown-two">
                <div class="countdown-flexible">
                    <ThumbUpOutlinedIcon className='countdown-icon'/>
                    <h1>134324</h1>
                    <h4>HAPPY CUSTOMERS</h4>
                </div>
            </div>
            <div class="col-md-3 countdown-three">
                <div class="countdown-flexible">
                    <LanguageOutlinedIcon className='countdown-icon'/>
                    <h1>134324</h1>
                    <h4>MILES TRAVELLED</h4>
                </div>
            </div>
            <div class="col-md-3 countdown-four">
                <div class="countdown-flexible">
                    <ContentCutOutlinedIcon className='countdown-icon'/>
                    <h1>134324</h1>
                    <h4>ROLLS OF TAPE</h4>
                </div>
            </div>
        </div>
    );
};

export default Countdown;