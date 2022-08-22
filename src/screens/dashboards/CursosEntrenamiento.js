import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import { useSelector } from "react-redux";
import { HeaderDashboard } from "../../componentes/dashboards/HeaderDashboard";
import { getCoursesById } from "../../services/services";

export const CursosEntrenamiento = () => {
  const { token } = useSelector((state) => state.auth);
  const {filter_id} = useSelector(state => state.questions);
  const [courses, setCourses] = useState();


  useEffect(() => {
    async function getCoursesByArea() {
      const data = await getCoursesById(token,filter_id); 
      setCourses(data.response._embedded.courses);
    } 

    getCoursesByArea();
  }, []);

  console.log(courses, 'cursos')

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
                <input type="radio" />
                  <Image src={item.file_path} alt={item.file_path} />
                </div>
                <div className="cursos__entrenamiento-selection_card-content" >
                  <h1>{item.name}</h1>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};
