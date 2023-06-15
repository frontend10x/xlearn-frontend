import React, { useState, useEffect } from 'react'
import { Col, Container, Image } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { HeaderDashboard } from '../../componentes/dashboards/HeaderDashboard'
import { getUserCourseById } from '../../services/services'
import '../../assets/css/screens/dashboards/StylePerfil.css';
import { imagenUser } from '../../assets/img'
import { Footer } from '../../componentes/Footer'
import { Header } from '../../componentes/Header'
import { LinearProgress } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export const Perfil = () => {

  const { name, token, id } = useSelector(state => state.auth);
  const [routeCourses, setRouteCourses] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    async function getCourseRoute() {
      const data = await getUserCourseById(token, id);
      console.log(data, 'valores');
      setRouteCourses(data.response._embedded.courses)
    }
    getCourseRoute();
  }, []);

  const redirect = () => {
    console.log('hola');
  }

  return (
    <div className='profile__section' >
      <Header />
      <div className='container mt-5' >
        <div className='row' >
          <div className='col-md-3' >
            <Image src={imagenUser} className="mt-5" />
            <h3 className='mt-5' >{name}</h3>
          </div>
          <div className='col-md-9' >
            <div className='d-flex flex-column mt-5 mb-5 ' >
              <h2 className='fw-bold' >Mi Perfil</h2>
              <h6>Hola, soy {name}</h6>
            </div>
            <div>
              <h2 className='fw-bold'>Cursos en ruta</h2>
              <div className='d-flex flex-wrap gap-2' >
                {routeCourses &&
                  routeCourses.map((item, index) => (
                    <div class="card" style={{ width: "18rem" }} key={index} >
                      <img src={item.file_path} class="card-img-top" alt="..." />
                      <div class="card-body">
                        <h5 class="card-title fw-bold ">{item.name}</h5>
                        <p class="card-text fs-6" style={{ color: "#8894ab" }} >Progress: {item["progress:porcentage"]}</p>
                        <LinearProgress variant="determinate" className='mb-2' value={item["progress:porcentage"]} />

                        {item["progress:porcentage"] > 91 &&
                          <a onClick={redirect} class="btn btn-primary">1</a>
                        }
                        {item["progress:porcentage"] > 90 &&
                          <a onClick={redirect} class="btn btn-primary">2</a>
                        }
                        {item["progress:porcentage"] < 90 &&
                          <a onClick={redirect} class="btn btn-primary">3</a>
                        }
                      </div>
                    </div>))
                  }
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
