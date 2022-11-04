import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { coursesByArea, diagnosticTraining } from "../../actions/diagnostico";
import { HeaderDashboard } from "../../componentes/dashboards/HeaderDashboard";
import { getCoursesById, registerDiagnostic } from "../../services/services";
import { confirmedRoute } from "../../actions/confirmRoute";

export const CursosEntrenamiento = () => {
  const { token, id, groups } = useSelector((state) => state.auth);
  const { filter_id } = useSelector(state => state.questions);
  const [courses, setCourses] = useState();
  
  const [schema, setSchema] = useState({
    target: "Entrenamiento",
    user_id: id,
    _rel: 'areas',
    group_id: groups,
    answer: []
  });
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const {target,user_id,_rel,group_id,answer} = schema;

  console.log(schema)

  useEffect(() => {
    async function getCoursesByArea() {
      const data = await getCoursesById(token, filter_id);
      setCourses(data.response._embedded.courses);
    }

    getCoursesByArea();
  }, []);

  const respuesta = (item) => {
    const answer = {
      "course": `${item.id}`,
    }
    setSchema({ ...schema, answer: [...schema.answer, answer] });
  };

  const previousPage = () => {
    navigate('/project/diagnostic/training/areas')
  };

  const nextPage = async () => {
    try {
      const data = await registerDiagnostic(target,user_id,_rel,answer,group_id,token);
      dispatch(diagnosticTraining(answer,data?.diagnostic_id, _rel))
      dispatch(confirmedRoute(data.course_route))
      navigate("/project/diagnostic/confirm_route");
      console.log(_rel,'rel')
    } catch (error) {
      console.error(error);
    }
  };
  const filterCourses = () => {
    alert(`Filtro hecho este es el id`);
  };

  return (
    <div className="cursos__entrenamiento-section">
      <HeaderDashboard />
      <div className="cursos__entrenamiento-container">
        <p>STEP 3 OF 4</p>
        <div className="cursos__entrenamiento-content">
          <h1>Selecciona tus cursos</h1>
        </div>

        <div className="cursos__filter-content">
            <ul className="cursos__filter-buttons">
              
              <div>
                <h3>Áreas</h3>
              </div>

              <h4>Corporativo</h4>
              <input
                className="text-start"
                type="button"
                onClick={filterCourses}
                value="Sostenibilidad"
              />
              <input
                className="text-start"
                type="button"
                onClick={filterCourses}
                value="Economía Circular"
              />
              
              <h4>Corporativo</h4>
              <input
                className="text-start"
                type="button"
                onClick={filterCourses}
                value="Sistemas de Innovación"
              />
              <input
                className="text-start"
                type="button"
                onClick={filterCourses}
                value="Diseño de nuevos negocios"
              />
               <input
                className="text-start"
                type="button"
                onClick={filterCourses}
                value="Innovación Abierta"
              />
              <input
                className="text-start"
                type="button"
                onClick={filterCourses}
                value="Oportunidades, Retos y Priorización"
              />

              <h4>Corporativo</h4>
              <input
                className="text-start"
                type="button"
                onClick={filterCourses}
                value="IOT"
              />
              <input
                className="text-start"
                type="button"
                onClick={filterCourses}
                value="Analítica y Big Data"
              />
              <input
                className="text-start"
                type="button"
                onClick={filterCourses}
                value="Inteligencia Artificial"
              />
               <input
                className="text-start"
                type="button"
                onClick={filterCourses}
                value="Marketing Digital"
              />
              <input
                className="text-start"
                type="button"
                onClick={filterCourses}
                value="Ciberseguridad"
              />
              <input
                className="text-start"
                type="button"
                onClick={filterCourses}
                value="Blockchain"
              />
              <input
                className="text-start"
                type="button"
                onClick={filterCourses}
                value="Robótica"
              />


              
            </ul>
          </div>

        <div className="cursos__entrenamiento-selection_container" >
          {courses &&
            courses.map((item, index) => (
              <div className="cursos__entrenamiento-selection_card" key={index} >
                <div className="cursos__entrenamiento-selection_card-image" >
                  <input type="radio" onClick={() => respuesta(item)} />
                  <Image src={item.file_path} alt={item.file_path} />
                  <h2>{item.name}</h2>
                </div>
              </div>
            ))
          }
        </div>
      
      
      
      </div>
      <div>
        <div className="preguntas__footer">
          <button
            className="preguntas__footer-button_prev"
            onClick={previousPage}
          >
            Volver
          </button>
          <button className="preguntas__footer-button_next" onClick={nextPage}>
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};
