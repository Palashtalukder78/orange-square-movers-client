import React from 'react';
import commingSoon from '../../files/images/comming soon.gif'
const Services = () => {
    return (
        <div style={{ width:"100%",height:"500px", display:"flex", alignItems:"center", justifyContent:"center"}}>
            <div  className='text-center'>
                <h2>Service Page</h2>
                <img className='img-fluid d-block' src={commingSoon} alt="" />
            </div>
        </div>
    );
};

export default Services;