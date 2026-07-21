import React from 'react'
import "./Projects.css"
import { FaGithub } from "react-icons/fa";
import assets from '../../assets/assets';

const Projects = () => {

    return (
        <div className='projects'>

            <h2>Projects</h2>

            <div className="project-cards">
                <div className="project-card">
                    <img src={assets.buildbook} alt="" />

                    <div className="card-container">

                        <h3>Buildbook</h3>
                        <p>A full-stack project management app to organize tasks,
                            track goals, and improve productivity.
                        </p>

                        <p>React • Node.js • Express • MongoDB</p>

                        
                        <div className="projects-btns">
                            <a href="https://build-book-eta.vercel.app/" className='live-demo'>Live Demo</a>
                            <a href="https://github.com/samia-siddique/BuildBook" className='icon' ><FaGithub /></a>
                        </div></div>
                </div>

                <div className="project-card">
                    <img src={assets.clicksy} alt="" />

                    <div className="card-container">
                        <h3>Clicksy</h3>
                        <p>A creative online photobooth where users can capture,
                            customize, and download photo strips.

                        </p>

                        <p>React • Vite • Webcam API
                        </p>

                        <div className="projects-btns">
                            <a href="https://clicksy.vercel.app/" className='live-demo'>Live Demo</a>
                            <a href="https://github.com/samia-siddique/Clicksy" className='icon'><FaGithub /></a>
                        </div></div>
                </div>

                <div className="project-card">
                    <img src={assets.surgicare} alt="" />

                    <div className="card-container">

                        <h3>SurgiCare</h3>
                        <p>A creative online photobooth where users can capture,
                            customize, and download photo strips.

                        </p>

                        <p>React • Vite • Webcam API
                        </p>

                        <div className="projects-btns">
                            <a href="https://surgi-care.vercel.app/" className='live-demo'>Live Demo</a>
                            <a href="https://github.com/samia-siddique/SurgiCare" className='icon'><FaGithub /></a>
                        </div></div>
                </div>
            </div>
        </div>
    )
}

export default Projects
