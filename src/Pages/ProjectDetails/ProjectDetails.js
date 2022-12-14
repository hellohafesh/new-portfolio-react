import React from 'react';
import { useLoaderData } from 'react-router';
import { Link } from 'react-router-dom';
import allprojects from '../../project.json';
import './ProjectDetails.css';



const ProjectDetails = () => {

    const id = useLoaderData();
    console.log(id);
    const allproject = allprojects;
    return (
        <div>
            <h1 className="text-5xl">project details</h1>


            {
                allproject.map(project => project.id === id ?
                    <><div key={project.id} className="blog mx-auto my-auto">
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
                                <Link to={`/projects/${project.id}`} className='ml-[-50px]'></Link>

                                <Link href="https://poriidhan.web.app/" target="_blank"
                                >

                                </Link>

                            </div>
                        </div>










                    </div>



                        <div class="image-scroll-wrapper h-96 w-96">
                            <img class="image-scroll  h-96 w-96" alt='' src={project.home} />
                        </div></>
                    :
                    <></>


                )
            }

        </div>
    );
};

export default ProjectDetails;