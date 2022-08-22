import React, { useState } from "react";
import { Image } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Slider_01 } from "../../assets/img";
import { HeaderDashboard } from "../../componentes/dashboards/HeaderDashboard";
import { Footer } from "../../componentes/Footer";

export const ConfirmarRuta = () => {
  const { id } = useSelector((state) => state.questions);

  const [courses, setCourses] = useState([
    {title:'curso de prueba 0',image:Slider_01, time:2, lessons:20},
    {title:'curso de prueba 1',image:Slider_01, time:2, lessons:20},
    {title:'curso de prueba 2',image:Slider_01, time:2, lessons:20},
    {title:'curso de prueba 3',image:Slider_01, time:2, lessons:20},
    {title:'curso de prueba 4',image:Slider_01, time:2, lessons:20},
  ]);

  return (
    <div className="confirm_route-section">
      <HeaderDashboard />
      <div className="confirm_route-container">
        <div className="confirm_route-title">
          <p>Step 4 of 4</p>
          <h1>Confirmar la Ruta a tomar</h1>
        </div>
        <div className="confirm_route-add_course" >
            <h3>Mis cursos</h3>
            <button>Agregar curso a la lista</button>
        </div>
        <div className="confirm_route-container_route" >
        {
            courses.map((item,index) => (
                <div key={index} >
                    <div className="confirm_route-card">
                        <Image src={item.image} className="confirm_route-image"/>
                        <div className="confirm_route-card_content">
                        <h3>{item.title}</h3>
                        <p>Este curso esta en tu ruta</p>
                        <div className="d-flex gap-5">
                        <p>{item.time}H</p>
                        <p>{item.lessons} Clases</p>
                        </div>
                        </div>
                    </div>
                </div>
            ))
        }
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};
