import React from 'react';
import './Button.css';

const Button = ({ value }) => {
    return (
        <div>
            <nav>
                <ul className='mx-auto'>
                    <li className='mx-auto'>
                        {value}
                        <span></span><span></span><span></span><span></span>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Button;