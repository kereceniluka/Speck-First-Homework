import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.scss';

const Hero = () => {
    return (
        <section className="SectionHero">
            <div className="SectionHero__Container">
                <h1 className="SectionHero__Title">Tjedan karijera</h1>
                <span className="SectionHero__Organizer">FOI</span>
                <p className="SectionHero__Date">20.10.2020. - 26.10.2020.</p>
                <Link className="Btn">Prijavi se</Link>
            </div>
        </section>
    );
}

export default Hero;