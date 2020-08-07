import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

const TeacherItem = () =>{
  return(
    <article className="teacher-item">
         <header>
           <img src="https://avatars1.githubusercontent.com/u/32880056?s=400&u=e56e74661575516c6c6beeb2a8fd905180a51386&v=4" alt="Michael Douglas"/>
           <div>
             <strong>Michael Douglas</strong>
             <span>Sistemas</span>
           </div>
         </header>

         <p>
           Lorem, ipsum dolor sit amet consectetur adipisicing elit.
           <br /><br />
           Ducimus unde architecto placeat, explicabo hic, possimus nesciunt molestiae tempora id quo aliquam, dolor vitae nisi repudiandae omnis.
         </p>

         <footer>
           <p>
             Preço/Hora
             <strong>R$ 90,00</strong>
           </p>
           <button type="button">
            <img src={whatsappIcon} alt="WhatsApp"/>
            Entrar em contato
           </button>
         </footer>
       </article>
  )
}

export default TeacherItem;