import React, { useState, useEffect } from 'react'
import { Col, Container, Image } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { HeaderDashboard } from '../../componentes/dashboards/HeaderDashboard'
import { getUserCourseById } from '../../services/services'
import '../../assets/css/screens/dashboards/StylePerfil.css';
import { imagenUser } from '../../assets/img'
import { Footer } from '../../componentes/Footer'

export const Perfil = () => {

  const { name, token, id } = useSelector(state => state.auth);
  const [routeCourses, setRouteCourses] = useState([]);

  useEffect(() => {
    async function getCourseRoute() {
      const data = await getUserCourseById(token, id);
      console.log(data,'valores');
      setRouteCourses(data.response._embedded.courses)
    }

    getCourseRoute();
  }, [])

  return (
    <div className='profile__section' >
      <HeaderDashboard />
      <Container className='d-flex' >
        <Col md={3} >
          <Image src={imagenUser} className="mt-5" />
          <h3 className='mt-5' >{name}</h3>
        </Col>
        <Col md={6} >
          <div className='d-flex flex-column mt-5 mb-5 ' >
            <h2 className='fw-bold' >Mi Perfil</h2>
            <h6>Hola, soy {name}</h6>
          </div>

          <div>
            <h2 className='fw-bold'>Cursos en ruta</h2>

            <Container className='' >
              <div className='card__container' >
                {routeCourses &&
                  routeCourses.map((item, index) => (
                    <div key={index} className='card__body' >
                      <Image src={item.file_path} className='card__image' />
                      <div className='card__content w-100' >
                        <h5 className='card__title' >{item.name}</h5>
                        <p>Lessons: {item['lessons:amount']}</p>
                      </div>
                    </div>
                  )
                  )
                }
              </div>
            </Container>

          </div>
        </Col>
      </Container>
      <Footer />
    </div>
  )
}
