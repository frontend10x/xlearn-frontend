import React, { useState } from "react";
import { HeaderDashboard } from "../../componentes/dashboards/HeaderDashboard";
import { NavegacionDashboard } from "../../componentes/dashboards/NavegacionDashboard";
import { Footer } from "../../componentes/Footer";
import { useForm } from "../../hooks/useForm";
import { createGroup, getUserWithoutGroups } from "../../services/services";
import { useSelector } from "react-redux";
import { Alert, Image } from "react-bootstrap";
import { equiposIcon } from "../../assets/img";
import { Axios } from "axios";
import Swal from "sweetalert2";
import { useEffect } from "react";



export const CrearEquipos = () => {

  const { token, subcompanie_id } = useSelector((state) => state.auth);
  const [formValues, handleInputChange] = useForm({
    name: '',
    description: '',
  });
  const { name, description } = formValues;
  const [usersWithoutGroup, setUsersWithoutGroup] = useState()
  const [lider, setLider] = useState([])
  const [users, handleInputUser] = useForm({
    user: ''
  });
  useEffect(() => {
    async function getUsersFromSubcompanieId() {
      const data = await getUserWithoutGroups(token, subcompanie_id)
      setUsersWithoutGroup(data.response._embedded.users)
    }
    getUsersFromSubcompanieId();
  }, []);


  const createTeams = async (e) => {
    try {
      const data = await createGroup(token, name, description);
      document.getElementById('form').reset();
      Swal.fire({
        icon: 'success',
        title: 'Felicidades',
        text: `${data.message}`,
        // footer: '<a href="">Why do I have this issue?</a>'
      })

      addUsersToGroup();

    } catch (error) {
      Swal.fire({
        icon: 'success',
        title: 'Bienvenido',
        text: `${error.response.data.message}`,
        // footer: '<a href="">Why do I have this issue?</a>'
      })
    }
  };

  const addUsersToGroup = (e) => {

    let arr = [
      {
        id: e?.target?.id,
        value: e?.target?.value
      },
      ...lider
    ]
    setLider(arr)
    
  }
  

  return (
    <div className="crear__equipos-section">
      <HeaderDashboard />
      <div className="xlrn__crear-equipos__container" >
        <div className="xlrn__crear-equipos__nav" >
          <NavegacionDashboard />
        </div>

        <div className="xlrn__crear-equipos__content-title" >
          <h1>Gestion de equipos</h1>
          <p>Crea tus equipos</p>
        </div>

        <div className="xlrn__crear-equipos__container-form" >
          <div className="xlrn__crear-equipos__container-form-content" >
            <Image src={equiposIcon} />
            <h1>Crea tu Grupo</h1>
            <p>Crea a tu grupo y capacitalos con la ruta que asigne el lider</p>
          </div>

          <div className="xlrn__crear-equipos__form" id="form" >
            <input onChange={handleInputChange} name="name" type="text" placeholder="Nombre del equipo" />
            <select placeholder="Agregar rol de lider" className="xlrn__asignar-rol">
              <option value="..." >Asignar rol de lider</option>
              {lider?.map((item, index) => (
                  <option key={index} value={item.id} onChange={handleInputUser} name="user">
                    {item.value}
                  </option>
                  )
                )
              }
            </select>
            {usersWithoutGroup &&
              usersWithoutGroup.map((item, index) => (
                <div>
                  <input type="radio" value={item.name} id={item.id} onClick={addUsersToGroup} />
                  <h1>{item.name}</h1>
                </div>
              ))
            }
            <button className="xlrn__crear-equipos__form-button" onClick={createTeams} >Crear equipo</button>
          </div>

        </div>

      </div>

      <Footer />
    </div>
  );
};
