import React from 'react';
import logo from '../Assets/logo.png';

const CardHead = () => {
    return(
        <div className='card-main d-flex justify-content-between align-items-center'>
            <>
                <img
                    src={logo}
                    alt='logo'
                />
            </>

            <>
                <h2 className='text-capitalize mt-3'>
                    react developer
                </h2>
            </>
        </div>
    )
}

export default CardHead;