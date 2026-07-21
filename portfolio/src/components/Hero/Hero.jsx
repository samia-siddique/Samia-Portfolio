import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import "./Hero.css"

const Hero = () => {
    const [index, setIndex] = useState(0)
    console.log("Hero rendered");
    const greetings = [
        "Hello.",
        "Hola.",
        "Bonjour.",
        "Ciao.",
        "Hallo.",
        "Olá.",
        "مرحبًا.",
        "سلام.",
        "أهلًا وسهلًا ",
        "Xin chào",
        "Привет,"
    ]

    // display all the greetings
    useEffect(() => {
        const id = setInterval(() => {
            setIndex((prevIndex) => {
                if (prevIndex === greetings.length - 1) {
                    return 0;
                }
                return prevIndex + 1;
            });
        }, 1500);

        return () => clearInterval(id);
    }, []);

    return (
        <>
            <Navbar />
            <div className="hero">
                <h1>{greetings[index]}</h1>
                <h3>I am <span>Samia !</span> </h3>

                <p>I'm an undergraduate software developer who loves turning ideas into modern, interactive web experiences. I enjoy building full-stack applications and crafting clean, creative user interfaces.

                </p>

                <div className="btns">
                    <button className='cv-btn'>cv</button>
                    <button className='linkedin-btn'> <a href="https://www.linkedin.com/in/samia-siddique/"> linkedin </a></button>
                </div>
            </div>
        </>
    )
}

export default Hero
