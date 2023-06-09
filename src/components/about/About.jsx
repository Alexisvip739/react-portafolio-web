import React from 'react'
import './about.css';
import ME from '../../assets/me-about.jpeg';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
          <div className='about__me'>
            <div className='about__me-image'>
              <img  src={ME} alt="About Image" />
            </div>
          </div>


          <div className='about__content'>
            <div className="about__cards">
              <article className='about__card'>
                <FaAward className='about__icon'/>
                <h5>Experience</h5>
                <small>+3 Years Experience</small>
              </article>

              <article className='about__card'>
                <FiUsers className='about__icon'/>
                <h5>Clients</h5>
                <small>6+ Worldwides</small>
              </article>

              <article className='about__card'>
                <VscFolderLibrary className='about__icon'/>
                <h5>Projects</h5>
                <small>+8 Completes</small>
              </article>
            </div>

            <p>
              I am a software engineer from Zacatecas Mexico. and I have been designing several websites where 
              I have developed more as an engineer. I like help convert a vision and an idea into meanigful and useful 
              products of software.
            </p>
         </div>
      </div>
      
    </section>

  )
}

export default About