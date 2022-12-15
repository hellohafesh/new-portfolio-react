import React from 'react';
import Button from '../../Layout/Component/Button/Button';

const Resume = () => {
    return (
        <div>
            <div className='flex justify-center'>
                <a className='' href='../../../../public/img/Resume-of-All-Hafesh.pdf' download >
                    <Button value={"Resume"}></Button>
                </a>
                <a className='' href='../../../../public/img/CV of All-Hafesh.pdf' download >
                    <Button value={"My CV"}></Button>
                </a>
            </div>
            <div className="">

            </div>
        </div>
    );
};

export default Resume; 