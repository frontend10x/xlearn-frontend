import React from "react";
import { HeaderDashboard } from "../../componentes/dashboards/HeaderDashboard";
import { NavegacionDashboard } from "../../componentes/dashboards/NavegacionDashboard";
import { Footer } from "../../componentes/Footer";
import { useForm } from "../../hooks/useForm";
import { createGroup } from "../../services/services";
import { useSelector } from "react-redux";

export const CrearEquipos = () => {
  const { token } = useSelector((state) => state.auth);
  const [formValues, handleInputChange] = useForm([]);
  const { name, description } = formValues;


  const createUser = async (e) => {
    e.preventDefault();
    const data = await createGroup(token, name, description);
    console.log(data, "respuesta");
  };

  return (
    <div className="crear__equipos-section">
      <HeaderDashboard />
      <div className="crear__equipos-container">
        <div className="crear__equipos-navegacion">
          <NavegacionDashboard />
        </div>
        <div className="crear__equipos-banner_container">
          <div className="crear__equipos-banner_content">
            <h1>Crear Equipos</h1>
            <p>
              Feugiat pretium nib ipsum consequa vida trum quisque non tellus
              orci ac strud ctor tellus mauris Feugiat pretium nib ipsum
              consequa vida trum
            </p>
            <form className="crear__equipos-banner_form" onSubmit={createTeams}>
              <div>
                <input
                  placeholder="nombre"
                  name="name"
                  value={name}
                  onChange={handleInputChange}
                />
                <input
                  placeholder="description"
                  name="description"
                  value={description}
                  onChange={handleInputChange}
                />
                <input placeholder="" />
                <input placeholder="" />
              </div>
              <button>send</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
