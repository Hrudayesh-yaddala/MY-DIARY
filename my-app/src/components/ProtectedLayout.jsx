import React from 'react'
import { Navigate,Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const ProtectedLayout = () => {
  const token=localStorage.getItem("token");
  if(!token){
    return <Navigate to={"/"} />
  }
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default ProtectedLayout
