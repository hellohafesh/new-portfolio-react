import React from 'react';
import Button from '../../../Layout/Component/Button/Button';
import SectionProject from '../SectionProject/SectionProject';
import './Home.css';
import { FaLinkedin, FaFacebookSquare, FaGithubSquare, FaTwitterSquare, FaFacebookMessenger } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Section from '../Section/Section';
import { Typewriter } from 'react-simple-typewriter';


const Home = () => {



    return (
        <div>

            <div className="hero bg-base-700 mb-16 p-sm-0">
                <div className="hero-content flex-col mx-auto my-auto lg:flex-row gap-8 lg:gap-20" >
                    <img className='h-[400px] w-[280px] md:h-[450px] md:w-[350px] lg:h-[500px] lg:w-[400px] rounded-lg shadow-2xl' src="https://i.ibb.co/8B5rL0t/IMG-39911-removebg-preview.png" aria-hidden alt='soumik-photo' data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000" />
                    <div className='lg:mt-20  xl:mt-20'>

                        {/* https://i.ibb.co/8B5rL0t/IMG-39911-removebg-preview.png */}
                        <div className=" flex justify-center">
                            <h1 className="text-4xl text-center font-bold  w-[350px]">Hi,I'm <span className='text-primary'>
                                <Typewriter
                                    words={['All-Hafesh']}
                                    loop={1}
                                    cursor
                                    cursorStyle='_|'
                                    typeSpeed={300}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </span></h1>
                        </div>

                        <h1 className='text-2xl text-center text-primary'>
                            A {' '}
                            <span className='font-bold '>
                                {/* Style will be inherited from the parent element */}
                                <Typewriter
                                    words={['Web Designer', 'Web Developer', 'MERN Stack Developer', 'Fullstack Developer']}
                                    loop={100}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={80}
                                    deleteSpeed={60}
                                    delaySpeed={1000}
                                />
                            </span>
                        </h1>



                        <p className="py-6  text-justify" data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="500">I am a skilled web developer who also possesses other fundamental front-end abilities. I am proficient in ReactJS, JavaScript, HTML5, CSS3, and related frameworks. Additionally, I've worked with backend technologies like NodeJS, ExpressJS, and MongoDB in the past and a strong desire to learn about contemporary web technologies</p>
                        <div className="flex justify-center ">
                            <div className="bg-primary rounded-3xl font-bold text-center px-2 py-1 w-28 badge-secondary" data-aos="flip-up">My Skill's</div>

                        </div>
                        <div className='grid lg:grid-cols-5  mt-6 grid-cols-3 md:grid-cols-4 sm:grid-cols-3 justify-around flex-start gap-2' data-aos="flip-down">


                            <div className="bg-primary rounded-3xl font-bold px-2 py-1 w-28 badge-secondary">HTML</div>
                            <div className="bg-primary rounded-3xl font-bold px-2 py-1 w-28 badge-secondary">CSS</div>
                            <div className="bg-primary rounded-3xl font-bold px-2 py-1 w-28 badge-secondary">BOOTSTRAP</div>
                            <div className="bg-primary rounded-3xl font-bold px-2 py-1 w-28 badge-secondary">TAILWIND</div>
                            <div className="bg-primary rounded-3xl font-bold px-2 py-1 w-28 badge-secondary">JAVASCRIPT</div>
                            <div className="bg-primary rounded-3xl font-bold px-2 py-1 w-28 badge-secondary">REACT</div>
                            <div className="bg-primary rounded-3xl font-bold px-2 py-1 w-28 badge-secondary">NODE JS</div>
                            <div className="bg-primary rounded-3xl font-bold px-2 py-1 w-28 badge-secondary">EXPRESS JS</div>
                            <div className="bg-primary rounded-3xl font-bold px-2 py-1 w-28 badge-secondary">MONGODB</div>
                            <div className="bg-primary rounded-3xl font-bold px-2 py-1 w-28 badge-secondary">FIREBASE</div>
                        </div>


                        <div className="md:flex lg:flex xl:flex 2xl:flex justify-center-center mt-4 mx-auto" data-aos="fade-up">
                            <Link to='/hire'>
                                <Button value={"Hire Me"}></Button>
                            </Link>
                            <a className='' href='../../../../public/img/Resume-of-All-Hafesh.pdf' download >
                                <Button value={"Resume"}></Button>
                            </a>
                        </div>
                        <div className='flex mt-5 flex-start gap-5  p-4' data-aos="fade-up">

                            <a href='https://www.linkedin.com/in/all-hafesh/' rel="noreferrer" target='_blank'><FaLinkedin className='h-12 w-12 hover:text-primary'></FaLinkedin></a>
                            <a href='https://www.facebook.com/allhafesh' rel="noreferrer" target='_blank'><FaFacebookSquare className='h-12 w-12 hover:text-primary'></FaFacebookSquare></a>
                            <a href='https://github.com/soumik825' rel="noreferrer" target='_blank'><FaGithubSquare className='h-12 w-12 hover:text-primary'></FaGithubSquare></a>
                            <a href='https://twitter.com/HafeshAll' rel="noreferrer" target='_blank'><FaTwitterSquare className='h-12 w-12 hover:text-primary'></FaTwitterSquare></a>
                            <a href='https://m.me/allhafesh' rel="noreferrer" target='_blank'><FaFacebookMessenger className='h-12 w-12 hover:text-primary'></FaFacebookMessenger></a>



                        </div>


                    </div>

                </div>
            </div>












            <SectionProject></SectionProject>


            <Section></Section>









        </div >
    );
};

export default Home;