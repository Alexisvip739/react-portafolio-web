import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
function Experience() {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My experience</h2>
      <div className='container experience__container'>
        <div className='experience__fronted'>
          <h3>Fronted Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>


            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>


            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
             <div>
              <h4>Bootstrap</h4>
              <small className='text-light'>Experienced</small>
             </div>
            </article>


            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Tailwind</h4>
              <small className='text-light'>Basic</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>React</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Figma</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Flutter</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>UX/UI</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            
          </div>
        </div>

        <div className='experience__fronted'>
        <h3>Backend Development</h3>
        <div className='experience__content'>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
            <h4>SQL</h4>
            <small className='text-light'>Intermediate</small>
            </div>
           
          </article>


          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
           <div>
            <h4>Mongo DB</h4>
            <small className='text-light'>Intermediate</small>
           </div>
          </article>


          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
           <div>
            <h4>NodeJs</h4>
            <small className='text-light'>Intermediate</small>
           </div>
          </article>


          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
            <h4>Django</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>

          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
           <div>
            <h4>Python</h4>
            <small className='text-light'>Intermediate</small>
           </div>
          </article>

          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
            <h4>MySQL</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>

          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
           <div>
           <h4>Java</h4>
            <small className='text-light'>Intermediate</small>
           </div>
          </article>

          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
           <div>
           <h4>SQL3LITE</h4>
            <small className='text-light'>Intermediate</small>
           </div>
          </article>
          
        </div>
      </div>




      </div>
      
    </section>
  )
}

export default Experience