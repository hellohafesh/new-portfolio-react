import React from 'react';
import Button from '../../Layout/Component/Button/Button';
import './Hire.css';

const Hire = () => {
    return (
        <div>



            <div className="hero " >
                <div className="hero-content flex-col justify-center lg:flex-row-reverse">

                    <form className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100" action="https://formsubmit.co/allhafesh825@gmail.com" method="POST" data-aos="zoom-out-up">
                        <h1 className='text-primary text-2xl font-bold text-center'> For Connect  Send Your Details</h1>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="hidden" name="_subject" value="New Mail submission!" />
                                <input type="email" className="input input-bordered" name="email" placeholder="Email Address" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone</span>
                                </label>
                                <input type="hidden" name="_next" value="https://allhafesh.web.app/thankyou" />
                                <input type="text" className="input input-bordered" name="Phone" placeholder="Write Your Contact Number" required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Message</span>
                                </label>
                                <input type="text" className="input input-bordered" name="Message" placeholder="Write Your Message" required />

                            </div>
                            <div className="form-control mt-6">
                                <button type="submit">
                                    <Button value={'Submit'}></Button> </button>
                            </div>
                        </div>
                    </form>





                    <div className='m-3 '>
                        <div className="" data-aos="fade-down">
                            <h1 className='text-primary text-3xl font-bold text-center'>Why You Hire Me</h1>
                        </div>

                        <div class="maincontainer " data-aos="zoom-out-right">
                            <div class="back">
                                <h2 className="text-primary font-bold text-xl mt-3">Creative Things</h2>
                                <p>Introduction to Copywriting’ workshop focuses on the theory and processes of professional copywriting as applied to persuasion, reasoning, and rhetoric. This workshop is best-suited to learning how to write and think about consumer-driven functions.</p>
                            </div>
                            <div class="front">
                                <div class="image">
                                    <img alt='' src="https://i.ibb.co/930RStT/creative.jpg" />
                                </div>
                            </div>
                        </div>
                        <div class="maincontainer" data-aos="zoom-out-left">
                            <div class="back">
                                <h2 className="text-primary font-bold text-xl mt-3">Service & Commitment</h2>
                                <p>Introduction to Content Marketing workshop focuses on building content frameworks that are designed for and directed at communication engagement. This interdisciplinary workshop is best-suited to learning visual and written communication strategies.</p>
                            </div>
                            <div class="front">
                                <div class="image">
                                    <img alt='' src="https://i.ibb.co/fC390Nf/service.jpg" />
                                </div>
                            </div>
                        </div>
                        <div class="maincontainer" data-aos="fade-up">
                            <div class="back">
                                <h2 className="text-primary font-bold text-xl mt-3">Security & Safety</h2>
                                <p>Introduction to Web-Writing workshop focuses on building creative and systemic digital content through online user experiences that benefit people and robots. This workshop is best-suited to creating content for digital platforms and devices — websites, mobile, game consoles, and virtual reality engines.</p>
                            </div>
                            <div class="front">
                                <div class="image">
                                    <img alt='' src="https://i.ibb.co/HKtqxns/security.jpg" />
                                </div>
                            </div>
                        </div>
                        <div class="maincontainer" data-aos="fade-up">
                            <div class="back">
                                <h2 className="text-primary font-bold text-xl mt-3">Partner & Relation</h2>
                                <p>Introduction to Copywriting’ workshop focuses on the theory and processes of professional copywriting as applied to persuasion, reasoning, and rhetoric. This workshop is best-suited to learning how to write and think about consumer-driven functions.</p>
                            </div>
                            <div class="front">
                                <div class="image">
                                    <img alt='' src="https://i.ibb.co/0GzkGD6/partner.jpg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>










            </div>










        </div>
    );
};

export default Hire;