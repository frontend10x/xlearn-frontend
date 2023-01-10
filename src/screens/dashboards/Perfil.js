import React, { useState, useEffect } from 'react'
import { Col, Container, Image } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { HeaderDashboard } from '../../componentes/dashboards/HeaderDashboard'
import { getUserCourseById } from '../../services/services'
import '../../assets/css/screens/dashboards/StylePerfil.css';

export const Perfil = () => {

  const { name, token, id } = useSelector(state => state.auth);
  const [routeCourses, setRouteCourses] = useState([]);

  useEffect(() => {
    async function getCourseRoute() {
      const data = await getUserCourseById(token, id);
      setRouteCourses(data.response._embedded.courses)
    }

    getCourseRoute();
  }, [])

  return (
    <div className='profile__section' >
      <HeaderDashboard />
      <Container className='d-flex' >
        <Col md={3} >HOLA</Col>
        <Col md={6} >
          <div className='d-flex flex-column mt-5 mb-5 ' >
            <h2 className='fw-bold' >Mi Perfil</h2>
            <h6>Hola, soy {name}</h6>
          </div>

          <div>
            <h2 className='fw-bold'>Cursos en ruta</h2>
            <div className='card__container' >
              {routeCourses &&
                routeCourses.map((item, index) => (

                  <div key={index} className='card__body' >
                    <Image src={item.file_path} className='card__image' />
                    <div className='card__content' >
                      <h5 className='card__title' >
                        {item.name}
                      </h5>
                    </div>
                  </div>
                )
                )
              }
            </div>
          </div>
        </Col>
      </Container>
    </div>
  )
}
