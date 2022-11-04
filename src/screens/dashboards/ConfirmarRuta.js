import React, { useState } from "react";
import { Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Slider_01 } from "../../assets/img";
import { HeaderDashboard } from "../../componentes/dashboards/HeaderDashboard";
import { Footer } from "../../componentes/Footer";
import { useNavigate } from "react-router-dom";
import { confirmRoute } from "../../services/services";
import { cleanQuestions, cleanTraining } from "../../actions/diagnostico";

export const ConfirmarRuta = () => {
  const { id, _rel } = useSelector((state) => state.questions);
  const { course_route } = useSelector(state => state.ruta)
  const { token } = useSelector(state => state.auth)
  const [courses, setCourses] = useState(course_route);
  const [trainingCourses, setTrainigCourses] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(_rel)

  const goBack = () => {
    if (_rel === 'questions') {
      dispatch(cleanQuestions());
      navigate('/project/diagnostic/questions');
    } else if (_rel === 'areas') {
      dispatch(cleanQuestions());
      navigate('/project/diagnostic/training/areas')
    }
  }
  const confirmedRoute = async () => {
    try {
      const data = await confirmRoute(token, id);
      navigate('/dashboard/lider');

    } catch (error) {
      console.error(error.response, 'error')
    }
  }

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
            courses.map((item, index) => (
              <div key={index} >
                <div className="confirm_route-card">
                  <Image src={item.file_path} className="confirm_route-image" />
                  <div className="confirm_route-card_content">
                    <h3>{item.name}</h3>
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
      <div className="xlrn__confirm-route__footer" >
        <button
          className="preguntas__footer-button_prev"
          onClick={goBack}
        >
          Volver
        </button>
        <button className="preguntas__footer-button_next" onClick={confirmedRoute}>
          Confirmar
        </button>
      </div>
    </div>
  );
};
