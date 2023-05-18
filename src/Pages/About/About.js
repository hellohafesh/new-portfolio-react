import React from 'react';
import { MdCloudDone } from 'react-icons/md';
import './About.css';

const About = () => {
    return (
        <div>
            <div className="hero  bg-base-200 ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className=" flex-shrink-0 w-full max-w-sm " data-aos="zoom-out-right">

                        <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_h9dffnuy.json" speed="1" loop autoplay></lottie-player>
                    </div>
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold mb-10" data-aos="fade-up-left">Who I am ?</h1>
                        <hr />
                        <p className="py-6 text-justify" data-aos="fade-left">Hello, my name is All-Hafesh. I'm a passionate web developer who has a lot of drive for building responsive and interactive websites and online applications. I am well-versed in HTML, CSS, JavaScript, Node.js, MongoDB, Firebase, and have practical knowledge of frameworks like React. I've worked on a range of projects, from little website updates to substantial online apps. I enjoy working in a team environment and am effective at solving problems. I am also knowledgeable about accessibility and web performance optimization. I'm constantly seeking for ways to sharpen my abilities and stay current with changes in the market.</p>
                    </div>

                </div>
            </div>




            <div className="card lg:card-side shadow-xl">


                <div className="card w-full md:w-full lg:w-[50%] xl:w-[50%] 2xl:w-[50%] bg-base-100 shadow-xl" data-aos="zoom-in-right">
                    <figure>
                        <img className='h-[200px] w-[200px] rounded-full shadow-2xl' src=" https://i.ibb.co/Y0wT3L9/allhafesh.png" alt="Album" /></figure>
                    <div className="card-body text-center">
                        <h1 className="text-2xl font-bold">A. N. M All- Hafesh</h1>
                        <p>If a dog chews shoes whose shoes does he choose?</p>

                    </div>
                </div>
                <div className="card-body bg-base-200" data-aos="zoom-in-left">
                    <div className="flex gap-2 items-center mb-4" > <p className='w-20'>HTML</p>
                        <div className="tooltip tooltip-open tooltip-primary" data-tip="80%">

                        </div>

                        <progress className="progress progress-primary w-full h-2 bg-white" value="80" max="100"></progress>

                    </div>
                    <div className="flex gap-2 items-center mb-4" > <p className='w-20'>CSS</p>
                        <div className="tooltip tooltip-open tooltip-primary" data-tip="70%">

                        </div>

                        <progress className="progress progress-primary w-full h-2 bg-white" value="70" max="100"></progress>

                    </div>
                    <div className="flex gap-2 items-center mb-4" > <p className='w-20'>JavaScript</p>
                        <div className="tooltip tooltip-open tooltip-primary" data-tip="50%">

                        </div>

                        <progress className="progress progress-primary w-full h-2 bg-white" value="50" max="100"></progress>

                    </div>
                    <div className="flex gap-2 items-center mb-4" > <p className='w-20'>ReactJS</p>
                        <div className="tooltip tooltip-open tooltip-primary" data-tip="60%">

                        </div>

                        <progress className="progress progress-primary w-full h-2 bg-white" value="60" max="100"></progress>

                    </div>
                    <div className="flex gap-2 items-center mb-4" > <p className='w-20'>NodeJs</p>
                        <div className="tooltip tooltip-open tooltip-primary" data-tip="50%">

                        </div>

                        <progress className="progress progress-primary w-full h-2 bg-white" value="50" max="100"></progress>

                    </div>
                    <div className="flex gap-2 items-center mb-4" > <p className='w-20'>ExpressJS</p>
                        <div className="tooltip tooltip-open tooltip-primary" data-tip="50%">

                        </div>

                        <progress className="progress progress-primary w-full h-2 bg-white" value="60" max="100"></progress>

                    </div>
                    <div className="flex gap-2 items-center mb-4" > <p className='w-20'>Firebase</p>
                        <div className="tooltip tooltip-open tooltip-primary" data-tip="55%">

                        </div>

                        <progress className="progress progress-primary w-full h-2 bg-white" value="55" max="100"></progress>

                    </div>
                    <div className="flex gap-2 items-center mb-4" > <p className='w-20'>MongoDB</p>
                        <div className="tooltip tooltip-open tooltip-primary" data-tip="50%">

                        </div>

                        <progress className="progress progress-primary w-full h-2 bg-white" value="50" max="100"></progress>

                    </div>
                </div>
            </div>


            <div className="p-3 ml-14 lg:ml-16 xl:ml-16 2xl:ml-18">
                <div className="" data-aos="flip-up">
                    <h1 className='text-4xl text-primary text-center font-bold  ' >MY SKILLS ?</h1>
                </div>
                <div className=" grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 justify-center items-center ">

                    <div className="mt-5 skill" data-aos="zoom-in-down">
                        <h1 className='mb-3 text-xl text-primary  font-bold'>Expertise at</h1>
                        <div className="flex gap-2">
                            <MdCloudDone className='h-6 w-6 hover:text-primary'></MdCloudDone>
                            <p> HTML – HTML 5</p>
                        </div>
                        <div className="flex gap-2">
                            <MdCloudDone className='h-6 w-6 hover:text-primary'></MdCloudDone>
                            <p>CSS – CSS 3</p>
                        </div>
                        <div className="flex gap-2">
                            <MdCloudDone className='h-6 w-6 hover:text-primary'></MdCloudDone>
                            <p>Bootstrap 5– React Bootstrap</p>
                        </div>
                        <div className="flex gap-2">
                            <MdCloudDone className='h-6 w-6 hover:text-primary'></MdCloudDone>
                            <p>Tailwind CSS</p>
                        </div>
                        <div className="flex gap-2">
                            <MdCloudDone className='h-6 w-6 hover:text-primary'></MdCloudDone>
                            <p>Daisy UI</p>
                        </div>
                        <div className="flex gap-2">
                            <MdCloudDone className='h-6 w-6 hover:text-primary'></MdCloudDone>
                            <p>Material UI</p>
                        </div>
                        <div className="flex gap-2">
                            <MdCloudDone className='h-6 w-6 hover:text-primary'></MdCloudDone>
                            <p>JavaScript</p>
                        </div>
                        <div className="flex gap-2">
                            <MdCloudDone className='h-6 w-6 hover:text-primary'></MdCloudDone>
                            <p>ES6</p>
                        </div>
                        <div className="flex gap-2">
                            <MdCloudDone className='h-6 w-6 hover:text-primary'></MdCloudDone>
                            <p>React</p>
                        </div>
                        <div className="flex gap-2">
                            <MdCloudDone className='h-6 w-6 hover:text-primary'></MdCloudDone>
                            <p> Git</p>
                        </div>
                        <div className="flex gap-2">
                            <MdCloudDone className='h-6 w-6 hover:text-primary'></MdCloudDone>
                            <p>Firebase Auth</p>
                        </div>
                    </div>






                    <div className="mt-5" data-aos="zoom-in-up">
                        <h1 className='mb-3 text-xl text-primary  font-bold'>I know also </h1>

                        <div className="flex gap-2">
                            <MdCloudDone className='h-6 w-6 hover:text-primary'></MdCloudDone>
                            <p>Node.js</p>
                        </div>
                        <div className="flex gap-2">
                            <MdCloudDone className='h-6 w-6 hover:text-primary'></MdCloudDone>
                            <p>Express.js</p>
                        </div>
                        <div className="flex gap-2">
                            <MdCloudDone className='h-6 w-6 hover:text-primary'></MdCloudDone>
                            <p>MongoDB</p>
                        </div>
                        <div className="flex gap-2">
                            <MdCloudDone className='h-6 w-6 hover:text-primary'></MdCloudDone>
                            <p>Firebase Hosting</p>
                        </div>
                        <div className="flex gap-2">
                            <MdCloudDone className='h-6 w-6 hover:text-primary'></MdCloudDone>
                            <p>React Router</p>
                        </div>
                        <div className="flex gap-2">
                            <MdCloudDone className='h-6 w-6 hover:text-primary'></MdCloudDone>
                            <p>React Hooks</p>
                        </div>
                        <div className="flex gap-2">
                            <MdCloudDone className='h-6 w-6 hover:text-primary'></MdCloudDone>
                            <p>npm</p>
                        </div>
                        <div className="flex gap-2">
                            <MdCloudDone className='h-6 w-6 hover:text-primary'></MdCloudDone>
                            <p>Netlify</p>
                        </div>
                        <div className="flex gap-2">
                            <MdCloudDone className='h-6 w-6 hover:text-primary'></MdCloudDone>
                            <p>Vercel</p>
                        </div>
                    </div>


                    <div className="mt-5" data-aos="zoom-out-down">
                        <h1 className='mb-3 text-xl text-primary  font-bold'>I am Familiar Also</h1>
                        <div className="flex gap-2">
                            <MdCloudDone className='h-6 w-6 hover:text-primary'></MdCloudDone>
                            <p>Redux</p>
                        </div>
                        <div className="flex gap-2">
                            <MdCloudDone className='h-6 w-6 hover:text-primary'></MdCloudDone>
                            <p>TypeScript</p>
                        </div>
                        <div className="flex gap-2">
                            <MdCloudDone className='h-6 w-6 hover:text-primary'></MdCloudDone>
                            <p>Next.js</p>
                        </div>
                        <div className="flex gap-2">
                            <MdCloudDone className='h-6 w-6 hover:text-primary'></MdCloudDone>
                            <p>Chart.js</p>
                        </div>
                        <div className="flex gap-2">
                            <MdCloudDone className='h-6 w-6 hover:text-primary'></MdCloudDone>
                            <p>PHP</p>
                        </div>
                        <div className="flex gap-2">
                            <MdCloudDone className='h-6 w-6 hover:text-primary'></MdCloudDone>
                            <p>MySQL</p>
                        </div>
                        <div className="flex gap-2">
                            <MdCloudDone className='h-6 w-6 hover:text-primary'></MdCloudDone>
                            <p>C</p>
                        </div>
                        <div className="flex gap-2">
                            <MdCloudDone className='h-6 w-6 hover:text-primary'></MdCloudDone>
                            <p>OOP</p>
                        </div>
                    </div>
                </div>
            </div>





        </div>
    );
};

export default About;