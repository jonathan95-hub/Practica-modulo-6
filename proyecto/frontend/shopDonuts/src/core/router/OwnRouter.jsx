import React from 'react'
import {Route, Routes, Navigate} from 'react-router'
import LoginPage from '../../pages/LoginPage/LoginPage'
import HomePage from '../../pages/HomePage/HomePage'
import MainLayout from '../../layout/MainLayout'
import ListPage from '../../pages/ListPage/ListPage'
import { useSelector } from 'react-redux'
import CreateComponent from '../../components/CreateDonuts/CreateComponent'
import MyProfilePage from '../../pages/MyProfile/MyProfilePage'
import ContactPage from '../../pages/Contact/ContactPage'

const OwnRouter = () => {
  const{isLogued} = useSelector(state => state.loginReducer)
  //Traemos las props para pasarselas a las rutas, setIsLogued para una vez nos loguemos cambie a true y aparezca la HomePage y isLogued para
       // hacer la comprobacion si isLogued es false aunque escribas /home en el buscador no te redirijira a esa pagian en cambio te manda de nuevo a "/"
       // que en este caso es loginPage
  return (
    <Routes>
        <Route path='/' element={<LoginPage/>} /> 
        <Route path='/home' element={ isLogued ? (<MainLayout><HomePage/></MainLayout>) : (<Navigate to="/" replace/>) } />
        <Route path='/list' element={ isLogued ? (<MainLayout><ListPage/></MainLayout>) : (<Navigate to= "/" replace/>)}/>
        <Route path= "/create" element={ isLogued ? (<MainLayout><CreateComponent /></MainLayout>) : (<Navigate to= "/" replace/>)}/>
        <Route path= "/Profile" element={isLogued ? (<MainLayout><MyProfilePage/></MainLayout>) : (<Navigate to="/" replace/>)}/>
        <Route path= "/contact" element={isLogued ? (<MainLayout><ContactPage/></MainLayout>) : (<Navigate to="/" replace/>)}/>
    </Routes>
  )
}

export default OwnRouter
