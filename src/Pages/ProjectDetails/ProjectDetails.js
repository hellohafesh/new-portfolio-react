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



            {
                allproject.map(project => project.id === id ?
                    <><div key={project.id} >





                        <div className="hero bg-base-200">
                            <div className="hero-content flex-col lg:flex-row">
                                <img src={project.banner} className=" h-1/2 w-1/2 rounded-lg shadow-2xl" alt='' />
                                <div>
                                    <h1 className="text-3xl font-bold"> {project.title}</h1>
                                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                                </div>
                            </div>
                        </div>

                        <div className='flex flex-wrap ml-2 py-2 px-2'>
                            <div className="bg-primary rounded-3xl font-bold px-2 py-1 m-2 w-28 badge-secondary">{project.technology1}</div>
                            <div className="bg-primary rounded-3xl font-bold px-2 py-1 m-2 w-28 badge-secondary">{project.technology2}</div>
                            <div className="bg-primary rounded-3xl font-bold px-2 py-1 m-2 w-28 badge-secondary">{project.technology3}</div>
                            <div className="bg-primary rounded-3xl font-bold px-2 py-1 m-2 w-28 badge-secondary">{project.technology4}</div>
                            <div className="bg-primary rounded-3xl font-bold px-2 py-1 m-2 w-28 badge-secondary">{project.technology5}</div>
                        </div>











                    </div>


                        <div className="flex flex-wrap gap-4">

                            <div class="image-scroll-wrapper h-96 w-96">
                                <img class="image-scroll  h-96 w-96" alt='' src={project.home} />
                            </div>
                            <div class="image-scroll-wrapper h-96 w-96">
                                <img class="image-scroll  h-96 w-96" alt='' src={project.signup} />
                            </div>
                            <div class="image-scroll-wrapper h-96 w-96">
                                <img class="image-scroll  h-96 w-96" alt='' src={project.image1} />
                            </div>
                            <div class="image-scroll-wrapper h-96 w-96">
                                <img class="image-scroll  h-96 w-96" alt='' src={project.image2} />
                            </div>
                            <div class="image-scroll-wrapper h-96 w-96">
                                <img class="image-scroll  h-96 w-96" alt='' src={project.image3} />
                            </div>
                            <div class="image-scroll-wrapper h-96 w-96">
                                <img class="image-scroll  h-96 w-96" alt='' src={project.image4} />
                            </div>
                            <div class="image-scroll-wrapper h-96 w-96">
                                <img class="image-scroll  h-96 w-96" alt='' src={project.image5} />
                            </div>
                        </div>




                    </>
                    :
                    <></>


                )
            }

        </div>
    );
};

export default ProjectDetails;