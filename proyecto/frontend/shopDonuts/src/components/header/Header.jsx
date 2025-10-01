import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { changeMenuOption } from '../../pages/HomePage/HomePageAction'

const Header = () => {

  const {menuOption} = useSelector(state => state.menuReducer)
  const navigate = useNavigate()
  const dispatch = useDispatch()
    // const [MenuOptios, setMenuOptios] = useState('HOME')
    // const[searchDonuts, setSearchDonuts] = useState (undefined)
      useEffect(() => {
        document.body.classList.add("rootHome");
        document.body.classList.remove("rootL");
      }, []);

    const logOut = () => {
      navigate("/")
     
    }

      const goToHome = () => {
      navigate("/home")
      dispatch(
        changeMenuOption(0)
      )
    }

      const goToList = () => {
      navigate("/list")
       dispatch(
        changeMenuOption(1)
      )
      
    }

    const goToCreate = () => {
      navigate("/create")
      dispatch(
        changeMenuOption(2)
      )
    }

  
    const goToProfile = () => {
      navigate("/profile")
      dispatch(
        changeMenuOption(3)
      )
    }

    const goToContact = () => {
      navigate("/contact")
      dispatch(
        changeMenuOption(4)
      )
    }

  

//     const liveSearch = () => {
//     if(searchDonuts === ''){
//         setListaInvitados(listaInvitadosInit)
//     }
//     else{
//         const aux = listaInvitadosInit.filter(e => e.nombreInvitado.toLowerCase().includes(searchName.toLowerCase()));
//         setListaInvitados(aux)
//     }
// }

// const searchInput = (value) => {
//     if(!value){
//         setSearchDonuts('')
//     }
//     else{
//         setSearchDonuts(value)
//     }
// }

// useEffect(() => {
//     if(searchDonuts || searchDonuts === ''){
//     liveSearch()
// }},[searchDonuts])

  return (
    <div >{
        menuOption === 0 ? (
            <div style={{display:'flex', flexDirection: 'row', justifyContent: 'space-between', background: '#662177ff', border: 'px solid #1e0025ff'}}>
             <div style={{marginInlineStart:'100px', marginBlockStart:'10px'}}>
            <img style={{height: '70px'}} src="/Ferrer DONUTS.svg" alt="" />
        </div>
        <div style={{marginInlineEnd:'100px', marginBlockStart:'10px'}}>
             <nav>
        <ul style={{display:'flex', gap:'40px'}}>
            <li><button onClick={goToList} className='buttonHome'>Lista de Donuts</button></li>
            <li><button className='buttonHome' onClick={goToProfile}>Mi perfil</button></li>
            <li><button className='buttonHome' onClick={goToContact}>Contacto</button></li>
        </ul>
      </nav>
      </div>
      <div>
        
        <button onClick={logOut} className='buttonlogOut'><img src="../../cerrarSesion.svg" alt="" /></button>
      </div>
        
        </div>
        ) : menuOption === 1 ? (
                  <>
        <div style={{display:'flex', flexDirection: 'row', justifyContent: 'space-between', background: '#662177ff', border: 'px solid #1e0025ff'}}>
                <div style={{marginInlineStart:'100px', marginBlockStart:'10px'}}>
            <img style={{height: '70px'}} src="/Ferrer DONUTS.svg" alt="" />
        </div>
             <div style={{marginInlineEnd:'100px', marginBlockStart:'10px'}}>
             <nav>
        <ul style={{display:'flex', gap:'40px'}}>
            <li><button onClick={goToHome} className='buttonHome'>Home</button></li>
            <li><button className='buttonHome' onClick={goToProfile}>Mi perfil</button></li>
            <li><button className='buttonHome' onClick={goToContact}>Contacto</button></li>
            <li><button className='buttonHome' onClick={goToCreate}>Crear Donuts</button></li>
           
        </ul>
      </nav>
      </div>
        <div>
        
        <button onClick={logOut} className='buttonlogOut'><img src="../../cerrarSesion.svg" alt="" /></button>
      </div>
        </div>
      
        </>
        ) : menuOption === 2 ? (         
              <>
        <div style={{display:'flex', flexDirection: 'row', justifyContent: 'space-between', background: '#662177ff', border: 'px solid #1e0025ff'}}>
                <div style={{marginInlineStart:'100px', marginBlockStart:'10px'}}>
            <img style={{height: '70px'}} src="/Ferrer DONUTS.svg" alt="" />
        </div>
             <div style={{marginInlineEnd:'100px', marginBlockStart:'10px'}}>
             <nav>
        <ul style={{display:'flex', gap:'40px'}}>
            <li><button onClick={goToHome} className='buttonHome'>Home</button></li>
            <li><button className='buttonHome' onClick={goToProfile}>Mi perfil</button></li>
            <li><button className='buttonHome' onClick={goToContact}>Contacto</button></li>
            <li><button className='buttonHome' onClick={goToList}>Lista de donuts</button></li>
           
        </ul>
      </nav>
      </div>
        <div>
        
        <button onClick={logOut} className='buttonlogOut'><img src="../../cerrarSesion.svg" alt="" /></button>
      </div>
        </div>
      
        </>) : menuOption === 3  ? (

                <>
          <div style={{display:'flex', flexDirection: 'row', justifyContent: 'space-between', background: '#662177ff', border: 'px solid #1e0025ff'}}>
                <div style={{marginInlineStart:'100px', marginBlockStart:'10px'}}>
            <img style={{height: '70px'}} src="/Ferrer DONUTS.svg" alt="" />
        </div>
             <div style={{marginInlineEnd:'100px', marginBlockStart:'10px'}}>
             <nav>
        <ul style={{display:'flex', gap:'40px'}}>
            <li><button onClick={goToHome} className='buttonHome'>Home</button></li>
            <li><button className='buttonHome' onClick={goToContact}>Contacto</button></li>
            <li><button className='buttonHome' onClick={goToList}>Lista de donuts</button></li>
           
        </ul>
      </nav>
      </div>
        <div>
        
        <button onClick={logOut} className='buttonlogOut'><img src="../../cerrarSesion.svg" alt="" /></button>
      </div>
        </div>
      
        </>

        ) 
        : menuOption === 4 ?
         (<>
             <div style={{display:'flex', flexDirection: 'row', justifyContent: 'space-between', background: '#662177ff', border: 'px solid #1e0025ff'}}>
                <div style={{marginInlineStart:'100px', marginBlockStart:'10px'}}>
            <img style={{height: '70px'}} src="/Ferrer DONUTS.svg" alt="" />
        </div>
             <div style={{marginInlineEnd:'100px', marginBlockStart:'10px'}}>
             <nav>
        <ul style={{display:'flex', gap:'40px'}}>
            <li><button onClick={goToHome} className='buttonHome'>Home</button></li>
            <li><button className='buttonHome' onClick={goToProfile}>Mi perfil</button></li>
            <li><button className='buttonHome' onClick={goToList}>Lista de donuts</button></li>
           
        </ul>
      </nav>
      </div>
        <div>
        
        <button onClick={logOut} className='buttonlogOut'><img src="../../cerrarSesion.svg" alt="" /></button>
      </div>
        </div>
        </>
         ) : (null)}
       
     
    </div>
  )
}

export default Header
