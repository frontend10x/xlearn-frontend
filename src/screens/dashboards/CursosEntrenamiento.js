import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { coursesByArea } from "../../actions/diagnostico";
import { HeaderDashboard } from "../../componentes/dashboards/HeaderDashboard";
import { getCoursesById, registerDiagnostic } from "../../services/services";

export const CursosEntrenamiento = () => {
  const { token, id, groups } = useSelector((state) => state.auth);
  const { filter_id } = useSelector(state => state.training);
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
      console.log(data);
      // dispatch(coursesByArea(filter_id, _rel));
      // navigate("/project/diagnostic/confirm_route");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="cursos__entrenamiento-section">
      <HeaderDashboard />
      <div className="cursos__entrenamiento-container">
        <p>STEP 3 OF 4</p>
        <div className="cursos__entrenamiento-content">
          <h1>Selecciona tus cursos</h1>
        </div>
        <div className="cursos__entrenamiento-selection_container" >
          {courses &&
            courses.map((item, index) => (
              <div className="cursos__entrenamiento-selection_card" key={index} >
                <div className="cursos__entrenamiento-selection_card-image" >
                  <input type="radio" onClick={() => respuesta(item)} />
                  <Image src={item.file_path} alt={item.file_path} />
                  <h1>{item.name}</h1>
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
