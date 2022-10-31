import React, { useState, useEffect, useRef, createRef } from "react";
import { quizDiagnostic, registerAnswers, registerDiagnostic } from "../../services/services";
import { useSelector } from "react-redux/es/exports";
import { HeaderDashboard } from "../../componentes/dashboards/HeaderDashboard";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { diagnosticQuestions } from "../../actions/diagnostico";
import { confirmedRoute } from "../../actions/confirmRoute";
import { diagnosticEvaluation } from "../../actions/evaluation";

export const Evaluacion = () => {
  const { token, id, groups } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  // const [question, setQuestion] = useState();

  const [question, setQuestion] = useState([
    {
      id: 1,
      question:
        "1.¿Cuál es el objetivo del curso de Análisis estratégico del entorno?",
      options: [
        {
          id: 1,
          response: "Encontrar nuevas formas de aterrizar a la luna",
        },
        { id: 2, response: "Conocer nuevas oportunidades de mercado" },
        {
          id: 3,
          response:
            "Explorar y analizar oportunidades de negocio que conduzcan a definir el foco para el diseño de un nuevo negocio",
        },
        { id: 4, response: "Identificar tendencias" },
      ],
    },
    {
      id: 2,
      question: "2.¿Cuál es la utilidad de la herramienta Foco de negocio?",
      options: [
        {
          id: 1,
          response: "Recopilar información de una oportunidad de negocio",
        },
        {
          id: 2,
          response:
            "Mostrar el panorama de todas las posibles oportunidades de negocio alrededor de una temática",
        },
        {
          id: 3,
          response:
            "Delimitar un espacio de mercado para el diseño del nuevo negocio y facilitar la síntesis, los hallazgos clave sobre la atmósfera, los artefactos y los actores de una oportunidad de negocio seleccionada",
        },
        { id: 4, response: "Remodelar las líneas de cableado de la empresa" },
      ],
    },
    {
      id: 3,
      question:
        "3.¿Cuál es el objetivo del curso de Análisis estratégico del entorno?",
      options: [
        { id: 1, response: "Encontrar nuevas formas de aterrizar a la luna" },
        { id: 2, response: "Conocer nuevas oportunidades de mercado" },
        {
          id: 3,
          response:
            "Explorar y analizar oportunidades de negocio que conduzcan a definir el foco para el diseño de un nuevo negocio",
        },
        { id: 4, response: "Identificar tendencias" },
      ],
    },
  ]);

  const [page, setPage] = useState();
  const [perPage, setPerpage] = useState(1);
  const [max, setMax] = useState();
  const navigate = useNavigate();
  const indexAlphabetic = ["A", "B", "C", "D"];
  const [isDisabled, setDisabled] = useState(true);
  // const classSelected = "preguntas__diagnostico-checkbox-selected";

  const [schema, setSchema] = useState({
    evaluation_id: 24,
    user_id: id,
    course_id: 1,
    answers: []
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

  // useEffect(() => {
  //   // console.clear();
  //   if (page != undefined) {
  //     const res = validateAnswers(page);
  //     console.log(page, res);
  //     setDisabled(!res);
  //   }
  // }, [page]);

  const respuesta = (event, questions, response) => {
    const savedAnswer = [...schema.answers];
    const answers = savedAnswer.filter((e) => e.question_id != questions.id);
    answers.push({ question_id: questions.id, answer: response.id });
    setDisabled(false);
    setSchema({ ...schema, answers: answers });
  };

  const previousPage = () => {
    page > 1 && setPage(page - 1);
  };

  const nextPage = async (status) => {
    const questionLength = question.length;
    if (validateAnswers(page - 1)) {
      page < questionLength && setPage(page + 1);
      if (status) {
       const result = await registerAnswers(schema)
        console.log("Fin del cuestionario");
      }
    }
  };

  const validateAnswers = (numPages) => {
    const getIdQuestion = question[numPages];
    const savedAnswer = [...schema.answers];
    try {
      const isExists = savedAnswer.filter(
        (e) => e.question_id == getIdQuestion.id
      );
      if (isExists.length == 0) {
        return false
        // const answers = { question_id: getIdQuestion.id, answer: null };
        // setSchema({ ...schema, answers: [...schema.answers, answers] });
      }
      return true;
    } catch (error) {
      return false;
    }
  };

  // const removeClass = () => {
  //   const allClassSeleted = document.querySelectorAll(`.${classSelected}`);
  //   allClassSeleted.forEach(e => {
  //     e.classList.remove(classSelected);
  //   });
  // }

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
                        idanswer={index}
                        idquestion={item.id}
                        type="submit"
                        className="preguntas__diagnostico-checkbox"
                        onClick={(event) => respuesta(event, item, items)}
                        value={indexAlphabetic[index]}
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
          <button
            className="preguntas__footer-button_next"
            onClick={() => nextPage(question.length == page)}
            disabled={isDisabled}
          >
            {question.length == page ? "Enviar respuesta" : "Siguiente"}
          </button>
        </div>
      </div>
    </div>
  );
};
