import React from 'react'

const ContactPage = () => {
  return (
    <div className='containerContactImage'>
        <div>
            <img className='imgContact' src="/imgContact.jpg" alt="" />
        </div>
        <div className='containerContactInfo'>
            <div>
                <span className='titleContact'>Ferrer Donuts</span>
            </div>
            <div>
                <span className='spanTitle'>TLF: </span>
                <span  className='spanTitle2'>777-444-777</span>
            </div>
            <div>
                <span className='spanTitle'>Direccion: </span>
                <span  className='spanTitle2'>C/lumbreiras, nª 36, Madrid</span>
            </div>
            <div>
                <span className='spanTitle'>Email: </span>
                <span className='spanTitle2'>ferrerdonuts@gmail.com</span>
            </div>
        </div>
    </div>
  )
}

export default ContactPage
    