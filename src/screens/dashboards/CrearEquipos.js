import React, { useState } from "react";
import { HeaderDashboard } from "../../componentes/dashboards/HeaderDashboard";
import { NavegacionDashboard } from "../../componentes/dashboards/NavegacionDashboard";
import { Footer } from "../../componentes/Footer";
import { useForm } from "../../hooks/useForm";
import { addUserToGroup, createGroup, getUserWithoutGroups } from "../../services/services";
import { useSelector } from "react-redux";
import { Image } from "react-bootstrap";
import { equiposIcon, imagenUser } from "../../assets/img";
import Swal from "sweetalert2";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "../../assets/css/screens/dashboards/StyleCrearEquipo.css";
import { Header } from "../../componentes/Header";


const users = []
export const CrearEquipos = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  const { token, subcompanie_id } = useSelector((state) => state.auth);
  const [formValues, handleInputChange] = useForm({
    name: '',
    description: '',
  });
  const { name, description } = formValues;
  const [usersWithoutGroup, setUsersWithoutGroup] = useState()
  const [lider, setLider] = useState([]);
  const [answer, setAnswer] = useState(false);
  const [teamManagement, setTeamManagement] = useState(false)
  const navigate = useNavigate();

  console.log(usersWithoutGroup, 'response');

  useEffect(() => {
    async function getUsersFromSubcompanieId() {
      const data = await getUserWithoutGroups(token, subcompanie_id)
      setUsersWithoutGroup(data.response._embedded.users)
    }
    getUsersFromSubcompanieId();
  }, [answer]);

  const createTeams = (e) => {
    const leader = document.getElementById('leader').value;
    if (leader === "false") {
      Swal.fire({
        icon: 'warning',
        title: 'Por favor asigna un lider',
        text: `Debes Asignar un lider a tu grupo`,
      })
      return
    }
    createGroup(token, name, description).then(event => {
      const group_id = event.id;

      addUserToGroup(token, group_id, users, leader).then(event => {
        Swal.fire({
          icon: 'success',
          title: 'Felicidades',
          text: `${event.data.message}`,
        })
        setAnswer(event.message);
        setTeamManagement(true)
      }
      );
    }
    ).catch(error => {
      Swal.fire({
        icon: 'error',
        title: 'Ups algo salio mal',
        text: `${error.response.data.message}`,
      })
    });

  }

  const addUsersToGroup = (e) => {

    let arr = [
      {
        id: e?.target?.id,
        value: e?.target?.value
      },
      ...lider
    ]

    const validate = lider.filter(obj => obj.id === e?.target?.id)
    if (validate?.length === 0) {
      setLider(arr);
      users.push(e.target.id);
    }

  }

  const redirect = (e) => {
    navigate('/manejo/equipos');
  }

  return (
    <div className="dashboard__section-empresa">
      <div className="dashboard__container">
        {/* <HeaderDashboard /> */}
        <Header />
        <div className="container xln-content-dash">

          <div className="row">
            

            <div className="col-md-2 xln-container-navDashboard" style={{ padding: "0"}}>
              <NavegacionDashboard />
            </div>

            <div className="col-md-10">
              <div className="row dashboard__container-nav_banner">
                <div className="col-md-12 xlrn__crear-equipos__content-title" >
                  <h1>Gestión de equipos</h1>
                  <p>Crea tus equipos</p>
                </div>

                <div className="col-md-12 xlrn__crear-equipos__container-form" >
                  <div className="xlrn__crear-equipos__container-form-content" >
                    <Image src={equiposIcon} />
                    <h1>Crea tu grupo</h1>
                    <p>Crea a tu grupo y capacitalos con la ruta que asigne el lider</p>
                  </div>

                  <div className="xlrn__crear-equipos__form" id="form" >
                    <input onChange={handleInputChange} name="name" type="text" placeholder="Nombre del equipo" />
                    
                    {usersWithoutGroup ?
                      usersWithoutGroup.map((item, index) => (
                        <div className="xln__conten__gestionEquipo" key={index}>
                          <input className="xln__gestionEquipo__radio" type="checkbox" value={item.name} id={item.id} onClick={addUsersToGroup} />
                          <img src={imagenUser} />
                          <h2>{item.name}</h2>
                          <p>{item.email}</p>
                        </div>
                      ))
                      : <p style={{color:"#8894ab"}}  className="fw-bold" >Crea tus usuarios en asginar usuario de gestion de equipos</p>
                    }
                    <select placeholder="Agregar rol de lider" className="xlrn__asignar-rol" id="leader">
                      {lider?.map((item, index) => (
                        <option key={index} value={item.id} >
                          {item.value}
                        </option>
                      )
                      )
                      }
                      <option value={false} >Asignar rol de lider</option>
                    </select>
                    {teamManagement ?
                      <button className="xlrn__crear-equipos__form-button" onClick={redirect} value={teamManagement} >Gestión de equipos</button>
                      : <button className="xlrn__crear-equipos__form-button" onClick={createTeams} >Crear equipo</button>
                    }
                  </div>

                </div>

                <div className="col-md-12" style={{padding:"0"}}>
                  <Footer />
                </div>

              </div>
            </div>
          </div>

        </div>

      

      </div>
    </div>
  );
};
