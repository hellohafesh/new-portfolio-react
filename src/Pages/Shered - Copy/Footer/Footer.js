import React from 'react';
import Button from '../../../Layout/Component/Button/Button';
import { FaLinkedin, FaFacebookSquare, FaGithubSquare, FaTwitterSquare, FaFacebookMessenger, FaPhone } from "react-icons/fa";
import { ImLocation } from "react-icons/im";

const Footer = () => {
    return (
        <div className="">
            <div className="hero  bg-zinc-600 " >

                <div className="hero-content flex-col  lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl text-center font-bold text-primary mb-5">Get In Tuch</h1>
                        <p className=" text-primary mt-5">Feel free to drop me a line anytime</p>
                        <p className=" text-primary mb-3">I'd love to hear from you!</p>
                        <div className="flex align-center my-3">
                            <ImLocation className='h-5 w-5 hover:text-primary mr-3'></ImLocation>
                            <p className=" text-primary ">North-Badda,Dhaka 1212,Bangladesh</p>
                        </div>
                        <div className="flex align-center my-3">
                            <FaPhone className='h-5 w-5 hover:text-primary mr-3'></FaPhone>
                            <p className=" text-primary ">+880 1744-128862</p>
                        </div>
                        <div className="flex align-center my-3">
                            <FaFacebookMessenger className='h-5 w-5 hover:text-primary mr-3'></FaFacebookMessenger>
                            <p className=" text-primary ">allhafesh825@gmail.com</p>
                        </div>
                        <div className="flex align-center">
                            <FaFacebookMessenger className='h-5 w-5 hover:text-primary mr-3'></FaFacebookMessenger>
                            <p className=" text-primary ">North-Badda,Dhaka 1212,Bangladesh</p>
                        </div>


                        <p className=" text-primary text-center mt-5">Connect with me on some social media</p>
                        <div className='flex justify-center gap-5  p-4'>
                            <a href='https://www.linkedin.com/in/all-hafesh/' rel="noreferrer" target='_blank'><FaLinkedin className='h-12 w-12 hover:text-primary'></FaLinkedin></a>
                            <a href='https://www.facebook.com/allhafesh' rel="noreferrer" target='_blank'><FaFacebookSquare className='h-12 w-12 hover:text-primary'></FaFacebookSquare></a>
                            <a href='https://github.com/soumik825' rel="noreferrer" target='_blank'><FaGithubSquare className='h-12 w-12 hover:text-primary'></FaGithubSquare></a>
                            <a href='https://twitter.com/HafeshAll' rel="noreferrer" target='_blank'><FaTwitterSquare className='h-12 w-12 hover:text-primary'></FaTwitterSquare></a>
                            {/* <a href='https://m.me/allhafesh' rel="noreferrer" target='_blank'><FaFacebookMessenger className='h-12 w-12 hover:text-primary'></FaFacebookMessenger></a> */}
                        </div>
                    </div >
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




                </div >









            </div >
            <div div className="text-center" >
                <p>Copyright © 2022 - All right reserved by All Hafesh</p>
            </div >
        </div >
    );
};

export default Footer;