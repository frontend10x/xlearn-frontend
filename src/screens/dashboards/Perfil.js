import React, { useState, useEffect } from 'react'
import { Col, Container, Image } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { getUserCourseById, updateProfile } from '../../services/services'
import '../../assets/css/screens/dashboards/StylePerfil.css';
import { imagenUser } from '../../assets/img'
import { Footer } from '../../componentes/Footer'
import { Header } from '../../componentes/Header'
import { LinearProgress } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { CertificateDonwloadButtonProfile } from '../../componentes/Commons/Certificate/CertificateDonwloadButtonProfile'
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar'
import { useForm } from '../../hooks/useForm'
import Swal from 'sweetalert2';

export const Perfil = () => {

  const { name, token, id, email, roles, subcompanie_id } = useSelector(state => state.auth);
  const [routeCourses, setRouteCourses] = useState([]);
  const navigate = useNavigate();
  const [editProfile, setEditProfile] = useState(true);

  const [formValues, handleInputChange] = useForm({
    nameUser: '',
    rol_id: roles,
    subcompanies_id: subcompanie_id,
    phone: ''
  })

  const { nameUser, phone } = formValues;



  useEffect(() => {
    async function getCourseRoute() {
      const data = await getUserCourseById(token, id);
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
    try {
      const data = updateProfile(token, id, nameUser, email, roles, subcompanie_id, email, phone);
      console.log(data,'respuesta del update');
      Swal.fire({
        icon: 'success',
        title: 'Usuario actualizado con exito',
        // text: `${data.message}`,
        text: `Los cambios se veran reflejados al cerrar e iniciar sesión nuevamente`,
        // footer: '<a href="">Why do I have this issue?</a>'
      })

    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Opps',
        // text: `${data.message}`,
        text: `Valida que estes enviando los datos correctamente`,
        // footer: '<a href="">Why do I have this issue?</a>'
      })
    }
  }

  const seeCertificate = (idCourse) => {
    navigate(`/ver/certificado/${idCourse}`)
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
                  <label htmlFor="floatingInput">Nombre: {name}</label>
                </div>
                <div class="form-floating mt-5 mb-3">
                  <input type="text" class="form-control" name='email' onChange={handleInputChange} id="floatingInput" placeholder={email} />
                  <label htmlFor="floatingInput">Correo: {email}</label>
                </div>
                <div class="form-floating mt-5 mb-3">
                  <input type="text" class="form-control" name='phone' onChange={handleInputChange} id="floatingInput" placeholder={phone} />
                  <label htmlFor="floatingInput">Contacto: {phone}</label>
                </div>
                <button className='border border-0 btn' style={{ backgroundColor: "#002333", color: "#fff" }} onClick={handleUpdateProfile} > Actualizar perfil </button>
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
                      <img src={item.file_path} onClick={() => seeCertificate(item.id)} style={{ cursor: 'pointer' }} className="card-img-top" alt="..." />
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
