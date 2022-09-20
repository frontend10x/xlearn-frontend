import React from "react";
import { HeaderDashboard } from "../../componentes/dashboards/HeaderDashboard";
import { NavegacionDashboard } from "../../componentes/dashboards/NavegacionDashboard";
import { Footer } from "../../componentes/Footer";
import { useForm } from "../../hooks/useForm";
import { createGroup } from "../../services/services";
import { useSelector } from "react-redux";
import { Alert, Image } from "react-bootstrap";
import { equiposIcon } from "../../assets/img";
import { Axios } from "axios";




export const CrearEquipos = () => {
  const { token } = useSelector((state) => state.auth);
  const [formValues, handleInputChange] = useForm({
    name:'',
    description:'',
  });
  const { name, description } = formValues;

  

  const createTeams = async (e) => {
    try {
      const data = await createGroup(token, name, description);
      alert(data.message);
      document.getElementById('form').reset();
    } catch (error) {
      alert(`${error.response.data.message}`)      
    }
  };

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
            {/* <input onChange={handleInputChange} name="description" type="text" placeholder="Descripcion"/> */}
            <button className="xlrn__crear-equipos__form-button" onClick={createTeams} >Crear equipo</button>
          </div>

        </div>

      </div>

      <Footer />
    </div>
  );
};
