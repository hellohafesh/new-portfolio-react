import React from 'react';
import Button from '../../../Layout/Component/Button/Button';
import SectionProject from '../SectionProject/SectionProject';
import './Home.css';
import { FaLinkedin, FaFacebookSquare, FaGithubSquare, FaTwitterSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Section from '../Section/Section';


const Home = () => {
    let TxtType = function (el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function () {
        let i = this.loopNum % this.toRotate.length;
        let fullTxt = this.toRotate[i];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span className="wrap">' + this.txt + '</span>';

        let that = this;
        let delta = 500 - Math.random() * 1000;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

        setTimeout(function () {
            that.tick();
        }, delta);
    };

    window.onload = function () {
        let elements = document.getElementsByClassName('typewrite');
        for (let i = 0; i < elements.length; i++) {
            let toRotate = elements[i].getAttribute('data-type');
            let period = elements[i].getAttribute('data-period');
            if (toRotate) {
                new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        let css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };


    return (
        <div>
            <div className="hero bg-base-700 mb-16 ">
                <div className="hero-content flex-col mx-auto my-auto lg:flex-row gap-8 lg:gap-20">
                    <img className='h-[400px] w-[300px] md:h-[450px] md:w-[350px] lg:h-[500px] lg:w-[400px] rounded-lg shadow-2xl' src="https://i.ibb.co/8B5rL0t/IMG-39911-removebg-preview.png" alt='' />
                    <div className='lg:mt-20  xl:mt-20'>


                        <div className="typewriter flex justify-center">
                            <h1 className="text-4xl text-center font-bold  w-96">Hi, I'm <span className='text-primary'>All Hafesh</span>.

                            </h1>
                        </div>

                        <h1 className="text-2xl  text-center text-primary font-bold">
                            <span>A </span><span className="typewrite" data-period="1000" data-type='[ "Web Developer.","Fronted Developer.", "Backend Developer.", "MERN Stack Developer.", " Full Stack Developer." ]'>.
                                <span className="wrap"></span>
                            </span>
                        </h1>


                        <p className="py-6 text-center font-bold">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <div className="flex justify-center ">
                            <div className="badge font-bold p-5  badge-secondary">My Skill's</div>
                        </div>
                        <div className='grid lg:grid-cols-5  mt-6 grid-cols-3 md:grid-cols-4 sm:grid-cols-3 justify-around flex-start gap-2'>
                            <div className="badge font-bold p-3 badge-secondary">HTML</div>
                            <div className="badge font-bold p-3 badge-secondary">CSS</div>
                            <div className="badge font-bold p-3 badge-secondary">BOOTSTRAP</div>
                            <div className="badge font-bold p-3 badge-secondary">TAILWIND</div>
                            <div className="badge font-bold p-3 badge-secondary">JAVASCRIPT</div>
                            <div className="badge font-bold p-3 badge-secondary">REACT</div>
                            <div className="badge font-bold p-3 badge-secondary">NODE JS</div>
                            <div className="badge font-bold p-3 badge-secondary">EXPRESS JS</div>
                            <div className="badge font-bold p-3 badge-secondary">MONGODB</div>
                            <div className="badge font-bold p-3 badge-secondary">FIREBASE</div>
                        </div>


                        <div className="md:flex lg:flex xl:flex 2xl:flex justify-center-center mt-4 mx-auto" >
                            <Button value={"Hire Me"}></Button>
                            <a className='' href='../../../../public/img/Resume-of-All-Hafesh.pdf' download >
                                <Button value={"Resume"}></Button>
                            </a>
                        </div>
                        <div className='flex mt-5 flex-start gap-5  p-4'>
                            <Link to='/' target='_blank'><FaLinkedin className='h-8 w-8 hover:text-primary'></FaLinkedin></Link>
                            <Link to='/' target='_blank'><FaFacebookSquare className='h-8 w-8 hover:text-primary'></FaFacebookSquare></Link>
                            <Link to='/' target='_blank'><FaGithubSquare className='h-8 w-8 hover:text-primary'></FaGithubSquare></Link>
                            <Link to='/' target='_blank'><FaTwitterSquare className='h-8 w-8 hover:text-primary'></FaTwitterSquare></Link>
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