import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/Footer/Footer'

const MainLayout = (props) => {
  const{ children,
    setIsLogued
  } = props
  return (
    <>
   <Header setIsLogued={setIsLogued}/>
   <div>
    {children}
   </div>
   <Footer style={{}}/>
   </>
  )
}

export default MainLayout
