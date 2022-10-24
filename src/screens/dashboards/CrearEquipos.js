import React, { useState } from "react";
import { HeaderDashboard } from "../../componentes/dashboards/HeaderDashboard";
import { NavegacionDashboard } from "../../componentes/dashboards/NavegacionDashboard";
import { Footer } from "../../componentes/Footer";
import { useForm } from "../../hooks/useForm";
import { addUserToGroup, createGroup, getUserWithoutGroups } from "../../services/services";
import { useSelector } from "react-redux";
import { Alert, Image } from "react-bootstrap";
import { equiposIcon } from "../../assets/img";
// import { Axios } from "axios";
import Swal from "sweetalert2";
import { useEffect } from "react";



const users = []
export const CrearEquipos = () => {

  const { token, subcompanie_id } = useSelector((state) => state.auth);
  const [formValues, handleInputChange] = useForm({
    name: '',
    description: '',
  });
  const { name, description } = formValues;
  const [usersWithoutGroup, setUsersWithoutGroup] = useState()
  const [lider, setLider] = useState([]);
  const [answer, setAnswer] = useState(false);
  useEffect(() => {
    async function getUsersFromSubcompanieId() {
      const data = await getUserWithoutGroups(token, subcompanie_id)
      setUsersWithoutGroup(data.response._embedded.users)
    }
    getUsersFromSubcompanieId();
  }, [answer]);

  const createTeams = async (e) => {
    const data = await createGroup(token, name, description).then(event => {
      const group_id = event.id;
      addUserToGroup(token, group_id, users).then(event => {
        console.log(event)
        Swal.fire({
          icon: 'success',
          title: 'Felicidades',
          text: `${event.data.message}`,
        })
        setAnswer(event.message);
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
    setLider(arr);
    users.push(e.target.id);
  }

  console.log(users, 'ids')

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
                <option key={index} value={item.id} >
                  {item.value}
                </option>
              )
              )
              }
            </select>
            {usersWithoutGroup &&
              usersWithoutGroup.map((item, index) => (
                <div key={index}>
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
