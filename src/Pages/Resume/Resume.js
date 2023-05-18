import React from 'react';
import Button from '../../Layout/Component/Button/Button';
import Cvv from './CV of All-Hafesh.pdf';
import Resumee from './Resume-of-All-Hafesh.pdf';

const Resume = () => {

    return (
        <div className=''>
            <div className='flex justify-center min-h-[35vh] ' data-aos="zoom-in">

                <a className='my-auto' href={Resumee} download >
                    <Button value={"Resume"}></Button>
                </a>
                <a className='my-auto' href={Cvv} download >
                    <Button value={"My CV"}></Button>
                </a>
            </div>
            <div className="max-w-[50vw] mx-auto pb-12" data-aos="zoom-out">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas magni nam molestiae distinctio sed quo quos inventore autem totam. Accusamus sapiente accusantium dicta! Vero consectetur, voluptatem odit esse nostrum laboriosam!</p>
            </div>
        </div>
    );
};

export default Resume; 