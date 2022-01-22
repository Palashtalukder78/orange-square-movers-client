import React from 'react';
import commingSoon from '../../files/images/comming soon.gif'
const Refferal = () => {
    return (
        <div>
            <div style={{ width:"100%",height:"500px", display:"flex", alignItems:"center", justifyContent:"center"}}>
                <div  className='text-center'>
                    <h2>Referral Page</h2>
                    <img className='img-fluid d-block' src={commingSoon} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Refferal;