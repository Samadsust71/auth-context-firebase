import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Root = () => {
  return (
    <div>
        <Header/>
      <div className='min-h-[calc(100vh-232px)]'>
      <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default Root
