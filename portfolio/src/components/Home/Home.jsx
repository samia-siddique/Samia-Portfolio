import React from 'react'
import Hero from '../Hero/Hero'
import Projects from '../Projects/Projects'
import Skills from '../Skills/Skills'

const Home = () => {

    return (
        <>
            <Hero />
            <section>
                <Projects />
            </section>

            <Skills />

        </>
    )
}

export default Home
