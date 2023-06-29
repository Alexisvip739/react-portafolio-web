import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
function Services() {
  return (
    <section id='services'>
      <h5>What i Offer</h5>
      <h2>Services</h2>
      <div className='container service__container'>
        <article className='service'>
          <div className="service__head">
            <h3>UX/UI Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Knowledge in Figma</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Knowledge in front-end as back-end</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Knowledge of effects designs and animations</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Knowledge of user experience design</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Responsive Designs</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>create compelling and coherent visual designs</p>
            </li>
           
          </ul>
        </article>


        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Create and test applications for websites</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Troubleshoot website</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Maintain and update the website</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Create website prototypes</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Knowledge in Frameworks and library</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>version control system (git,github)</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Knowledge of HTTPS, SSL, Cyber Security</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Knowledge in consumption of apis</p>
            </li>
          </ul>
        </article>


        <article className='service'>
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Used of Adobe xd</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Work in a team and communicate effectivel</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Excellent writing</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Graphic design</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Communication and collaboration</p>
            </li>

           
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services