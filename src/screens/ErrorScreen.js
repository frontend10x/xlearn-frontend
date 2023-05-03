import React from 'react'
import { Container } from 'react-bootstrap'
import { HeaderDashboard } from '../componentes/dashboards/HeaderDashboard'
import { Footer } from '../componentes/Footer'
import { Image } from 'react-bootstrap'
import { error404, XlearnLogo } from '../assets/img'
import { Header } from '../componentes/Header'

export const ErrorScreen = () => {
  
  const show = true;

  return (
    <div className='error_section' >
      {/* <HeaderDashboard show={show} /> */}
      <Header show={show} />
      <Container className='text-center d-flex flex-column align-items-center' >
        <h1 className='fw-bold' >Ups parece que la ruta que intentas buscar no existe</h1>
        <Image src={error404} alt="icon" className='w-25 rounded-circle ' />
        {/* <div className='w-50' >
          <Image src={XlearnLogo} alt="icon" className='w-25' />
        </div> */}

      </Container>
      <Footer />
    </div>
  )
}
