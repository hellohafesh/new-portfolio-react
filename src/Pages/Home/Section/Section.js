import React from 'react';
import './Section.css';
const Section = () => {
    return (
        <div>
            <h1 className="text-5xl font-bold text-center mx-10 my-20">Details Of My <span className='text-primary'>Exprience </span>. </h1>
            <div className="container1 grid lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-3 2xl:lg:grid-cols-3 sm:grid-cols-1 justify-center items-center">
                <div className="card1">
                    <div className="img-container1">
                        <img src="https://play-lh.googleusercontent.com/85WnuKkqDY4gf6tndeL4_Ng5vgRk7PTfmpI4vHMIosyq6XQ7ZGDXNtYG2s0b09kJMw" alt="" />
                    </div>
                    <div className="card1-details">
                        <h2>HTML</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, officia at labore tempore molestiae sunt ipsa vel laboriosam iure aliquid sint. A sint quas expedita, sit ducimus dolorem ipsum molestias? Repellat ipsum accusamus natus? Saepe, alias. </p>
                    </div>
                </div>
                <div className="card1">
                    <div className="img-container1">
                        <img src="https://rastonosumardi.tech/wp-content/uploads/2022/06/unnamed.png" alt="" />
                    </div>
                    <div className="card1-details">
                        <h2>CSS</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, officia at labore tempore molestiae sunt ipsa vel laboriosam iure aliquid sint. A sint quas expedita, sit ducimus dolorem ipsum molestias? Repellat ipsum accusamus natus? Saepe, alias.</p>
                    </div>
                </div>
                <div className="card1">
                    <div className="img-container1">
                        <img src="https://blog.logrocket.com/wp-content/uploads/2020/04/building-tailwind-css-table-component.png" alt="" />
                    </div>
                    <div className="card1-details">
                        <h2>TAILWIND</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, officia at labore tempore molestiae sunt ipsa vel laboriosam iure aliquid sint. A sint quas expedita, sit ducimus dolorem ipsum molestias? Repellat ipsum accusamus natus? Saepe, alias.</p>
                    </div>
                </div>
                <div className="card1">
                    <div className="img-container1">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCFmj9qg68AFAx8H7Xo5x20h4Ozi3ug1gXUdKqKnSBUfMdXuOKxMCpV4nsVecAwPNjwPs&usqp=CAU" alt="" />
                    </div>
                    <div className="card1-details">
                        <h2>JAVASCRIPT</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, officia at labore tempore molestiae sunt ipsa vel laboriosam iure aliquid sint. A sint quas expedita, sit ducimus dolorem ipsum molestias? Repellat ipsum accusamus natus? Saepe, alias.</p>
                    </div>
                </div>
                <div className="card1">
                    <div className="img-container1">
                        <img src="https://miro.medium.com/max/880/0*k9CL2yoHU6ELTkmi.png" alt="" />
                    </div>
                    <div className="card1-details">
                        <h2>REACT</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, officia at labore tempore molestiae sunt ipsa vel laboriosam iure aliquid sint. A sint quas expedita, sit ducimus dolorem ipsum molestias? Repellat ipsum accusamus natus? Saepe, alias.</p>
                    </div>
                </div>
                <div className="card1">
                    <div className="img-container1">
                        <img src="https://blog.logrocket.com/wp-content/uploads/2021/07/reading-writing-xml-node-js.png" alt="" />
                    </div>
                    <div className="card1-details">
                        <h2>NODE JS</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, officia at labore tempore molestiae sunt ipsa vel laboriosam iure aliquid sint. A sint quas expedita, sit ducimus dolorem ipsum molestias? Repellat ipsum accusamus natus? Saepe, alias.</p>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Section;