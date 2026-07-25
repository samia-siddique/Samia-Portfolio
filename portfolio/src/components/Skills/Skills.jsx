import React from 'react'
import "./Skills.css"
import logos from '../../assets/logos/logos'

const Skills = () => {
    return (
        <div id="skills" className="skills">
            <h2>Skills</h2>

            <div className="skills-container">
                <div className="skill-card">
                    <img src={logos.react} alt="React" />
                </div>

                <div className="skill-card">
                    <img src={logos.js} alt="JavaScript" />
                </div>

                <div className="skill-card">
                    <img src={logos.html} alt="HTML" />
                </div>

                <div className="skill-card">
                    <img src={logos.css} alt="CSS3" />
                </div>

                <div className="skill-card">
                    <img src={logos.tailwind} alt="Tailwind CSS" />
                </div>

                <div className="skill-card">
                    <img src={logos.bootstrap} alt="Bootstrap" />
                </div>

                <div className="skill-card">
                    <img src={logos.node} alt="Node.js" />
                </div>

                <div className="skill-card">
                    <img src={logos.express} alt="Express.js" />
                </div>

                <div className="skill-card">
                    <img src={logos.mongodb} alt="MongoDB" />
                </div>

                <div className="skill-card">
                    <img src={logos.git} alt="Git" />
                </div>

                <div className="skill-card">
                    <img src={logos.github} alt="GitHub" />
                </div>

                <div className="skill-card">
                    <img src={logos.vscode} alt="VS Code" />
                </div>

                <div className="skill-card">
                    <img src={logos.vercel} alt="Vercel" />
                </div>

                <div className="skill-card">
                    <img src={logos.render} alt="Render" />
                </div>

                 <div className="skill-card">
                    <img src={logos.npm} alt="Render" />
                </div>

                 <div className="skill-card">
                    <img src={logos.vite} alt="Render" />
                </div>
            </div>
        </div>
    )
}

export default Skills
