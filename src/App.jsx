import React from 'react'
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experiences/Experience';
import Services from './components/services/Services';
import Porfolio from './components/porfolio/Porfolio';
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer';
export const App = () => {
  return (
    <>

       <Header/>
       <Nav/>
       <About/>
       <Experience/>
       <Services/>
       <Porfolio/>
       <Contact/>
    </>
  )
}

export default App;