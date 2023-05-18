import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../Layout/Component/Button/Button';

const Thankyou = () => {
    return (
        <div className=' w-[100vw] h-[100vh] grid justify-center items-center my-auto'>
            <div className='items-center'>
                <h1 className='text-5xl font-bold text-primary'>Thank You </h1>
                <p className='text-primary text-center' >Wait some moment. <br /> I will catch up with you</p>
                <Link to='/'><Button value={"Back To Home"}></Button></Link>
            </div>
        </div>
    );
};

export default Thankyou;