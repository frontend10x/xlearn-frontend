import React from 'react'
import { HeaderDashboard } from '../componentes/dashboards/HeaderDashboard'
import { Footer } from '../componentes/Footer'

export const Ayuda = () => {
  const home = true;
  
  return (
    <div>
      <HeaderDashboard home={home} />
        <h1>Bienvenido a Ayuda!</h1>
        <Footer />
    </div>
  )
}
