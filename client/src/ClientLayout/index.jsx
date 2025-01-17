import React from 'react'
import {Outlet} from "react-router-dom"
import Header from '../layout/header'
import Footer from '../layout/footer'
const ClientLayout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default ClientLayout