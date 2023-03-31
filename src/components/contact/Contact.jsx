import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com';
const data =[
  {
    id:1,
    description:'Email',
    icon:<MdOutlineEmail/>,
    name:'alexisultreras01@gmail.com',
    url:'mailto:alexisultrerass@gmail.com'  
  },
  {
    id:2,
    description:'Messenger',
    icon:<RiMessengerLine/>,
    name:'AlexisUs',
    url:'https://m.me/alexis.ultrerass'  
  },
  {
    id:3,
    description:'Whatsapp',
    icon:<BsWhatsapp/>,
    name:'4949495833',
    url:'https://api.whatsapp.com/send?phone4949495833'  
  },
]
function Contact() {
  const form=useRef();


  const sendEmail=(e)=>{
    e.preventDefault();
    emailjs.sendForm('service_6y9toc8','template_isngjci',form.current,'33wcHTTZgKDXIRLIS')
    e.target.reset()
    console.log(e)
  }
  
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact me</h2>
      <div className='container contact__container'>
        <div className="contact__options">

          {
            data.map(({id,description,icon,name,url})=>{
              return(
                <article key={id} className='contact__option'>
                  {icon}
                  <h4>{description}</h4>
                  <h5>{name}</h5>
                  <a href={url} target="_blank">Send a message</a>
                </article>
              );
            })
          }
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" id="" rows="7" placeholder='Your Message ' required></textarea>
          <button type='sumbit' className='btn btn-primary'>Send Meesage</button>
        </form>
      </div>
    </section>
  )
}

export default Contact