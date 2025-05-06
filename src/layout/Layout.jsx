import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import "../App.css"
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='app-container'>
        <Header />
            <main className='main-container'>
            <Outlet />
            </main>
        <Footer />
    </div>
  )
}

export default Layout