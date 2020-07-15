import React, { Fragment } from 'react';
import '../../App.css';
import autolog from './img/autolog.png';
import puppypal from './img/puppypal.png';
import twitter from './img/twitter.png';

const About = () => {
    return (
        <Fragment>
            <div className="about-wrapper">
                <div className="about-col-left">
                    <h1 className="about-h1"><span className="about-h1-red">Hi, I'm Tori.</span> I'm a full stack web developer with over a year of experience 
                    building web applications from scratch, developing and integrating APIs, and working with databases.</h1>
                    <p className="about-body-copy">I’m a well-organized, dedicated, and versatile developer with a strong passion for technology and design. I’ve worn many hats in my career between design, marketing, project management and sales. My work is driven by the will of making complicated things easy and pleasant to interact with.<br/>
                    <br/>
                    I now specialise in web development but my knowledge of multiple fields allows me to work on a project with the full scope in mind; simplifying the process of working together and producing a more cohesive experience for your clients and users. Feel free to contact me or browse my projects in my portfolio.
                    </p>
                </div>
                <div className="about-col-right">
                    <ul className="skills">
                        <li className="li-header">Web Application Development</li>
                            <li className="skills-li">Responsive HTML/CSS</li>
                            <li className="skills-li">Javascript (vanilla, React/Redux, jQuery)</li>
                        <li className="li-header">API Integration & Development</li>
                            <li className="skills-li">REST API integration.</li>
                            <li className="skills-li">REST API development with Node.js</li>
                        <li className="li-header">Database Design</li>
                            <li className="skills-li">Database architectures in MongoDB, always aiming for performance, scale and stability.</li>   
                    </ul>
                </div>
            </div>
            <div className="portfolio-preview-wrapper">
                <h1 className="portfolio-h1">PORTFOLIO</h1>
                <div className="portfolio-preview-thumbnail-wrapper">
                <img src={puppypal} className="puppypal-preview" alt="puppypal-thumbnail" />
                <img src={autolog} className="autolog-preview" alt="autolog-thumbnail" />
                <img src={twitter} className="twitter-preview" alt="twitter-thumbnail" />
                </div>
            </div>
        </Fragment>
    )
}

export default About;