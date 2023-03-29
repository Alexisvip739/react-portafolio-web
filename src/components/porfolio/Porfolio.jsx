import React from 'react'
import './porfolio.css'
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';



const data=[
  {
    id:1,
    image:IMG1,
    title: 'Web Plants',
    github:'https://github.com/Alexisvip739/WebSite-Plan',
    demo: 'https://alexisusoftware12.000webhostapp.com/'
  },
  {
    id:2,
    image:IMG2,
    title: 'Web Coffe',
    github:'https//:github.comAlexisvip739/coffie-web',
    demo: 'https://coffesiteweb100a.000webhostapp.com/'
  },
  {
    id:3,
    image:IMG3,
    title: 'Test',
    github:'https//:github.com',
    demo: ''
  },
  {
    id:4,
    image:IMG4,
    title: 'Test',
    github:'https//:github.com',
    demo: ''
  },
  {
    id:5,
    image:IMG5,
    title: 'Test',
    github:'https//:github.com',
    demo: ''
  },
  {
    id:6,
    image:IMG6,
    title: 'Test',
    github:'https//:github.com',
    demo: ''
  },
]
function Porfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Porfolio</h2>
      <div className='container portfolio__container'>
        {
          data.map(({id,image,title,gituhub,demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title} />
                </div>
              <h3>{title}</h3>
  
              <div className='porftolio__item-cta'>
                <a href={gituhub} className='btn'>Github</a>
                <a href={demo} className='btn btn-primary'>Live Web</a>
  
              </div>
              
            </article>
            )
            })
        }
        
      </div>
    </section>
  )
}

export default Porfolio