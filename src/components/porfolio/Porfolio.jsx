import React from 'react'
import './porfolio.css'
import IMG1 from '../../assets/plant-web.webp';
import IMG2 from '../../assets/coffie-web.webp';
import IMG3 from '../../assets/dishes.webp';
import IMG4 from '../../assets/movies-react.webp';
import IMG5 from '../../assets/ravengate_solution.webp'
import IMG6 from '../../assets/Todo.png';
import IMG7 from '../../assets/ecommerse.webp';


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
    github:'https//github.com/Alexisvip739/coffie-web',
    demo: 'https://coffesiteweb100a.000webhostapp.com/'
  },
  {
    id:3,
    image:IMG3,
    title: 'Web Dishes',
    github:'https://github.com/Alexisvip739/Dishes-Website',
    demo: 'https://webdishes.000webhostapp.com/'
  },
  {
    id:4,
    image:IMG4,
    title: 'Movies Web',
    github:'https://github.com/Alexisvip739/movies-react-app',
    demo: 'https://alexisvip739.github.io/movies-react-app/'
  },
  {
    id:5,
    image: IMG5,
    title:'Ravengate Solution',
    github:'https://github.com/Alexisvip739/Ravenger-Solution',
    demo:'https://ravenger-solution.netlify.app/'
  },
  {
    id:6,
    image:IMG6,
    title: 'Todo App',
    github:'https://github.com/Alexisvip739/TodoApp.git',
    demo:'https://alexisvip739.github.io/TodoApp/'

  },
  {
    id:7,
    image: IMG7,
    title:'Ecommerse Api',
    github:'https://github.com/Alexisvip739/React-api-store',
    demo:'https://alexisvip739.github.io/React-api-store/'
  }


]
function Porfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Porfolio</h2>
      <div className='container portfolio__container'>
        {
          data.map(({id,image,title,github,demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title} />
                </div>
              <h3>{title}</h3>
  
              <div className='porftolio__item-cta'>
                <a href={github} target="_blank" className='btn'>Github</a>
                <a href={demo} target="_blank" className='btn btn-primary'>Live Web</a>
  
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