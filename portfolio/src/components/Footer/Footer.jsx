import React from 'react'
import "./Footer.css"
import assets from '../../assets/assets'
import {
    FaEnvelope,
    FaWhatsapp,
    FaLinkedin,
    FaGithub,
} from "react-icons/fa";

const Footer = () => {
    return (
        <div id='footer' className='footer'>
            <div className="footer-container">
                <div className="left-side">
                    <h2>Certificates</h2>

                    <div className="certificate-item">
                        <a href={assets.frontend} target="_blank" rel="noopener noreferrer">
                            Frontend Development
                        </a>
                    </div>

                    <div className="certificate-item">
                        <a href={assets.fullstack} target="_blank" rel="noopener noreferrer">
                            Full Stack Development
                        </a>
                    </div>

                    <div className="certificate-item">
                        <a href={assets.brightchamps} target="_blank" rel="noopener noreferrer">
                            BrightCHAMPS
                        </a>
                    </div>

                    <div className="certificate-item">
                        <a href={assets.gamesworkshop} target="_blank" rel="noopener noreferrer">
                            Games Workshop
                        </a>
                    </div>

                    <div className="certificate-item">
                        <a href={assets.globalhouse} target="_blank" rel="noopener noreferrer">
                            Global House
                        </a>
                    </div>
                </div>

                <div className="right-side">
                    <h2>Contact</h2>

                    <a href="mailto:samia.siddique34@gmail.com">
                        <FaEnvelope />
                        Email
                    </a>

                    <a href="https://wa.me/923178260007" target="_blank" rel="noreferrer">
                        <FaWhatsapp />
                        WhatsApp
                    </a>

                    <a href="https://www.linkedin.com/in/samia-siddique/" target="_blank" rel="noreferrer">
                        <FaLinkedin />
                        LinkedIn
                    </a>

                    <a href="https://github.com/samia-siddique" target="_blank" rel="noreferrer">
                        <FaGithub />
                        GitHub
                    </a>
                </div>
            </div>

            <div className="copyright">
                <p> Designed & Built by <span>Samia Siddique</span> © 2026 </p>
            </div>
        </div>
    )
}

export default Footer
