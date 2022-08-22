import React, { useEffect, useState } from "react";
import { HeaderDashboard } from "../../componentes/dashboards/HeaderDashboard";
import { NavegacionDashboard } from "../../componentes/dashboards/NavegacionDashboard";
import { Image } from "react-bootstrap";
import { banner_cursos, dashboard1,dashboard3,dashboard2 } from "../../assets/img";
import { useSelector } from "react-redux";
import { Footer } from "../../componentes/Footer";

export const DashboardLider = () => {

    const {name} = useSelector(state => state.auth)

    const [course, setCourse] = useState([
        { title: "Emprendimiento Corporativo", image: dashboard1 },
        { title: "Transformacion digital", image: dashboard3 },
        { title: "Excelencia operacional", image: dashboard3 },
      ]);
    
  return (
    <div className="dashboard__lider" >
      <HeaderDashboard />
      <div className="dashboard__lider-banner" >
        <Image src={banner_cursos} alt="banner" className="dashboard__lider-banner_image" />
        <div className="dashboard__lider-banner_content" >
          <h1>¡Hola {name}!</h1>
          <p><span>Continua estudiando.</span> Mira la ultima actividad en tus cursos</p>
        </div>
      </div>

      <div className="dashboard__lider-container_courses" >
        {course&&
          course.map((item, index) => (
            <div>
              
            </div>
          ))
        }
      </div>

    </div>
  );
};
