import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../Layout/Component/Button/Button';
import { FaLinkedin, FaFacebookSquare, FaGithubSquare, FaTwitterSquare, FaFacebookMessenger } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="hero  bg-zinc-600 " >
            <div className="hero-content flex-col  lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-4xl text-center font-bold text-primary">Contact now!</h1>
                    <p className="py-6 text-primary text-center">Provident cupid itate voluptatem et in.</p>
                    <div className='flex justify-center gap-5  p-4'>
                        <Link to='/' target='_blank'><FaLinkedin className='h-12 w-12 hover:text-primary'></FaLinkedin></Link>
                        <Link to='/' target='_blank'><FaFacebookSquare className='h-12 w-12 hover:text-primary'></FaFacebookSquare></Link>
                        <Link to='/' target='_blank'><FaGithubSquare className='h-12 w-12 hover:text-primary'></FaGithubSquare></Link>
                        <Link to='/' target='_blank'><FaTwitterSquare className='h-12 w-12 hover:text-primary'></FaTwitterSquare></Link>
                        <Link to='/' target='_blank'><FaFacebookMessenger className='h-12 w-12 hover:text-primary'></FaFacebookMessenger></Link>
                    </div>
                </div>
                <form className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100" action="https://formsubmit.co/allhafesh825@gmail.com" method="POST">
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






            </div>








        </div>
    );
};

export default Footer;