import React from 'react';
import './AboutMe.css'

const AboutMe = ({ navigateTo }) => {
    return (
        <div className="about-me-container">
            <button onClick={() => navigateTo('Home')}>Back</button>
            <div className='left-text'>
                <h1>About me</h1>
                <p>
                Hello! I'm Gabriel Yeung, a passionate and innovative software developer with a special focus on embedded software and Android development. With a background in Computer Science, I've honed my skills through real-world experience, research projects, and self-directed learning (this website).<br></br><br></br>

What drives me is not just writing code, but creating solutions that make a real impact. I believe that at the heart of every great piece of software is a keen understanding of the user's needs, coupled with innovative thinking and technical excellence. Whether working in a team or independently, I strive to bring these elements into every project I undertake.<br></br><br></br>

Outside of my professional work, I enjoy staying abreast of the latest technological trends. I'm always eager to learn new languages and frameworks, believing that a good developer never stops growing. This website itself was my first foray into web development, using this a stepping stone to refine my tools as a well-rounded developer.<br></br><br></br>

I'm excited to continue my journey in software development, seeking opportunities to contribute my skills and grow further. Thank you for visiting my portfolio!
                </p>
            </div>
            <div className='right-text'>
                <h2>
                    Experiences 
                </h2>
                <ul>
                <li>
                    <a href='https://www.rostrummedical.com/'>Software Developer at Rostrum Medical</a>
                    <br></br>
                    <span class="subtext">August 2023 - Present</span>
                </li>

                <li>
                    <a href='https://www.piccolosoft.com/service.html?type=taxi'>Android Developer at PiccoloSoft</a> 
                    <br></br>
                    <span class="subtext">August 2021 - May 2022</span>
                    </li>
                </ul>


            </div>
        </div>
    );
};

export default AboutMe;
