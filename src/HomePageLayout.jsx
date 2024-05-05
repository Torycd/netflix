import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
// import Home from './pages/Home'

const HomePageLayout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default HomePageLayout