import React, { useState, useEffect } from 'react'
import { Col, Container, Image } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { HeaderDashboard } from '../../componentes/dashboards/HeaderDashboard'
import { getUserCourseById, updateProfile } from '../../services/services'
import '../../assets/css/screens/dashboards/StylePerfil.css';
import { imagenUser } from '../../assets/img'
import { Footer } from '../../componentes/Footer'
import { Header } from '../../componentes/Header'
import { LinearProgress } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { generateCertificate } from '../../services/services'
import { baseURL } from '../../utils/route'
import { CertificateDonwloadButtonProfile } from '../../componentes/Commons/Certificate/CertificateDonwloadButtonProfile'
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar'
import { useForm } from '../../hooks/useForm'


export const Perfil = () => {

  const { name, token, id, email, roles, subcompanie_id } = useSelector(state => state.auth);
  const [routeCourses, setRouteCourses] = useState([]);
  const navigate = useNavigate();
  const [editProfile, setEditProfile] = useState(true);
  
  const [formValues, handleInputChange] = useForm({
      nameUser: '',
      emailUser: email,
      password: '',
      password_confirmation: '',
      rol_id: roles,
      subcompanies_id: subcompanie_id,
      email_confirmation: email ,
      phone: ''
  })

  const {nameUser, emailUser, password, password_confirmation, rol_id,subcompanies_id,email_confirmation,phone} = formValues;


  useEffect(() => {
    async function getCourseRoute() {
      const data = await getUserCourseById(token, id);
      // console.log(data, 'valores');
      setRouteCourses(data.response._embedded.courses)
    }
    getCourseRoute();
  }, []);

  const redirect = (name, course_id) => {
    navigate(`/course/videoplayer/${name}/${course_id}`)
  }

  const profileEdit = () => {
    if (editProfile) {
      setEditProfile(false);
    } else {
      setEditProfile(true)
    }
  }


  const handleUpdateProfile = () => {
    const data = updateProfile(token,id,nameUser,emailUser,password,password_confirmation,roles,subcompanie_id,phone);
    console.log(data);
  }

  const buttons = "btn p-0 border-0 text-secondary"

  return (
    <div className='profile__section' >
      <Header />
      <div className='container mt-5' >
        <div className='row' >

          <div className='col-md-3' >
            <Image src={imagenUser} className="mt-5" />
            {editProfile ?
              <>
                <h3 className='mt-5' >{name}</h3>
                <div className=''>
                  <div className='w-50 mt-3'>
                    <CircularProgressbarWithChildren styles={buildStyles({
                      rotation: 1 / 2 + 1 / 4, strokeLinecap: "butt",
                      trailColor: "#fff", pathColor: "#31fb84", textSize: "25px"
                    })} circleRatio={1} value={90}
                      strokeWidth={12}
                      className='mt-1' >
                      <h3 style={{ marginTop: 0 }} >{Math.floor(90)} %</h3>
                    </CircularProgressbarWithChildren>
                  </div>
                </div>
              </>
              :
              <div>
                <div class="form-floating mt-5 mb-3">
                  <input type="text" class="form-control" name='nameUser' onChange={handleInputChange} id="floatingInput" placeholder={name} />
                  <label for="floatingInput">{name}</label>
                </div>
                <button className='border border-0 btn' style={{backgroundColor:"#002333" , color:"#fff"}} onClick={handleUpdateProfile} > Actualizar perfil </button>
              </div>
            }
          </div>

          <div className='col-md-9 mt-5' >
            <div className='position-relative' >
              <button className='position-absolute top-0 end-0 btn btn-outline-dark' onClick={profileEdit} > Editar mi perfil </button>
            </div>
            <div className='d-flex flex-column mt-5 mb-5 ' >
              <h2 className='fw-bold' >Mi Perfil</h2>
              <h6>Hola, soy {name}</h6>

            </div>


            <div>
              <h2 className='fw-bold'>Cursos en ruta</h2>
              <div className='d-flex flex-wrap gap-2' >

                {routeCourses &&
                  routeCourses.map((item, index) => (
                    <div className="card mb-5" style={{ width: "18rem" }} key={index} >
                      <img src={item.file_path} className="card-img-top" alt="..." />
                      <div className="card-body h-25">
                        <h5 className="card-title fw-bold ">{item.name}</h5>
                      </div>
                      <div class="card-body">
                        <p className="card-text fs-6" style={{ color: "#8894ab" }} >Progress: {item["progress:porcentage"]}%</p>

                        <LinearProgress variant="determinate" className='mb-2' value={item["progress:porcentage"]} />
                        {item["progress:porcentage"] === 100 ?
                          <CertificateDonwloadButtonProfile courseId={item.id} />
                          : <button onClick={() => redirect(item.name, item.id)} className={buttons}><p>Continuar</p></button>
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
