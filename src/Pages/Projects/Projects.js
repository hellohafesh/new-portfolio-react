// import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Button from '../../Layout/Component/Button/Button';
import allprojects from '../../project.json';

const Projects = () => {



    const allproject = allprojects;
    return (
        <div>
            <h1>Projects{allproject.length} </h1>
            <div>
                <h1 className="text-4xl font-bold text-center  my-32">Some Of My <span className='text-primary'>Projects</span>. </h1>
                <div className="blogs ">

                    {
                        allproject.map(project =>
                            <div key={project.id} className="blog mx-auto my-auto">
                                <img src="img/poridhan.png" alt="" />
                                <div className="blog-text bg-zinc-800 text-white">
                                    <h2 className=' pt-2 text-xl pb-0 mb-0 font-bold'>
                                        {project.title}
                                    </h2>
                                    <div className='grid grid-cols-3 gap-2 py-2 px-2'>
                                        <div className="badge badge-secondary">Tailwind</div>
                                        <div className="badge badge-secondary">Daisy UI</div>
                                        <div className="badge badge-secondary">React</div>
                                        <div className="badge badge-secondary">Mongo DB</div>
                                        <div className="badge badge-secondary">Node JS</div>

                                    </div>
                                    <p className='pb-0' style={{ padding: "0" }}>
                                        <i className="fa-sharp fa-solid fa-hand-point-right"></i> I'm a Web Developer, I love to create
                                        beautiful and
                                        functional websites.
                                    </p>



                                    <div className='flex justify-around items-center'>
                                        <Link to={`/projects/${project.id}`} className='ml-[-50px]'> <Button value={"Details"}></Button></Link>

                                        <a href={project.live} target="_blank" rel="noreferrer" >
                                            <FaEye className='h-12 w-12 hover:text-primary' />
                                        </a>
                                    </div>
                                </div>
                            </div>)
                    }



                </div>
            </div>
        </div>
    );
};

export default Projects;