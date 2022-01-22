import React from 'react';
import BannerForms from '../../Forms/BannerForms/BannerForms';
import './Banner.css'
const Banner = () => {
    return (
        <div id="banner">
            <div class="container">
                <div class="row banner-columns">
                    <div class="col-md-6 ">
                        <div className='banner-content'>
                            <h6>Local & Long Distance</h6>
                            <h1>Denver Moving & Storage Company</h1>
                            <p>Hiring a team you can trust is everything when you are thinking about your next big move. Hiring family run business Orange Square Movers means you are hiring a team of professionals who will treat your personal belongings and family as if they were their own.</p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <BannerForms></BannerForms>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;