import React, { useState, useEffect } from "react";
import { quizDiagnostic, registerDiagnostic } from "../../services/services";
import { useSelector } from "react-redux/es/exports";
import { HeaderDashboard } from "../../componentes/dashboards/HeaderDashboard";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { diagnosticQuestions } from "../../actions/diagnostico";
import { confirmedRoute } from "../../actions/confirmRoute";

export const Evaluacion = () => {
  const { token, id, groups } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  // const [question, setQuestion] = useState();
  const [question, setQuestion ] = useState([
    {question:"¿Cuál es el objetivo del curso de Análisis estratégico del entorno?",options:[
      {response:"Encontrar nuevas formas de aterrizar a la luna"},
      {response:"Conocer nuevas oportunidades de mercado"},
      {response:"Explorar y analizar oportunidades de negocio que conduzcan a definir el foco para el diseño de un nuevo negocio"},
      {response:"Identificar tendencias"}
    ]},
    {question:"¿Cuál es la utilidad de la herramienta Foco de negocio?",options:[
      {response:"Recopilar información de una oportunidad de negocio"},
      {response:"Mostrar el panorama de todas las posibles oportunidades de negocio alrededor de una temática"},
      {response:"Delimitar un espacio de mercado para el diseño del nuevo negocio y facilitar la síntesis, los hallazgos clave sobre la atmósfera, los artefactos y los actores de una oportunidad de negocio seleccionada"},
      {response:"Remodelar las líneas de cableado de la empresa"}
    ]},
    {question:"¿Cuál es el objetivo del curso de Análisis estratégico del entorno?",options:[
      {response:"Encontrar nuevas formas de aterrizar a la luna"},
      {response:"Conocer nuevas oportunidades de mercado"},
      {response:"Explorar y analizar oportunidades de negocio que conduzcan a definir el foco para el diseño de un nuevo negocio"},
      {response:"Identificar tendencias"}
    ]}
  ])
  const [page, setPage] = useState();
  const [perPage, setPerpage] = useState(1);
  const [max, setMax] = useState();
  const navigate = useNavigate();

  const [schema, setSchema] = useState({
    target: "Proyecto",
    user_id: id,
    _rel: 'questions',
    answers: [],
    group_id: groups
  });

  useEffect(() => {
    async function quiz() {
      try {
        const data = await quizDiagnostic(token);
        // setQuestion(data.response._embedded.questions);
        setPage(data.response["hc:offset"]);
        setMax(data.response["hc:limit"]);
      } catch (error) {
        console.error(error);
      }
    }
    quiz();
  }, []);

  const { target, user_id, _rel, answers, group_id } = schema;

  const respuesta = (items) => {
    const answers = {
      "questions": `${items.id}`,
      "course": `${items.course_id}`,
      "answer": `${items.response}`,
    }
    setSchema({ ...schema, answers: [...schema.answers, answers] });
  };

  

  const previousPage = () => {
    if (page === 1) {
      setPage(page + 1)
      // navigate("/selection/process");
    } else {
      setPage(page - 1);
    }
  };

  const nextPage = async () => {
    if (page === 4) {
      try {
        const data = await registerDiagnostic(target, user_id, _rel, answers, group_id, token);
        dispatch(diagnosticQuestions(answers, data.diagnostic_id, _rel));
        dispatch(confirmedRoute(data.course_route))
        navigate("/project/diagnostic/confirm_route");
      } catch (error) {
        console.error(error);
      }
    }
    setPage(page + 1);
  };

  return (
    <div className="preguntas__diagnostico">
      <HeaderDashboard />
      <div className="preguntas__diagnostico-container">
        {question &&
          question
            .slice((page - 1) * perPage, (page - 1) * perPage + perPage)
            .map((item, index) => (
              <div key={index} className="preguntas__diagnostico-content">
                <h3>{item.question}</h3>
                <ul className="preguntas__diagnostico-list">
                  {item.options.map((items, index) => (
                    <div
                      key={index}
                      className="preguntas__diagnostico-respuesta"
                    >
                      <input
                        type="submit"
                        className="preguntas__diagnostico-checkbox"
                        onClick={() => respuesta(items)}
                        value="A"
                        name="course"
                      ></input>
                      <li>{items.response}</li>
                    </div>
                  ))}
                </ul>
              </div>
            ))}
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
