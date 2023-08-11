import React, { useState, useEffect, useRef, createRef } from "react";
import { evaluationCourse, generateCertificate, quizDiagnostic, registerAnswers, registerDiagnostic } from "../../services/services";
import { useSelector } from "react-redux/es/exports";
/* import { HeaderDashboard } from "../../componentes/dashboards/HeaderDashboard"; */

import { Header } from "../../componentes/Header";

import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

import "../../assets/css/screens/dashboards/StyleEvaluacion.css";

export const Evaluacion = () => {
  const { token, groups,id } = useSelector((state) => state.auth);
  const [question, setQuestion] = useState([]);
  const [skipQuest, setSkipQues] = useState([]);
  const { course_id,name } = useParams();
  const [page, setPage] = useState(0);
  const [perPage, setPerpage] = useState(1);
  const [results, setResults] = useState(false);
  const indexAlphabetic = ["A", "B", "C", "D"];
  const [isDisabled, setDisabled] = useState(true);
  const styleInputSelect = useRef({});
  const classSelected = "preguntas__diagnostico-checkbox-selected";
  const [schema, setSchema] = useState({
    evaluation_id: Number,
    user_id: id,
    course_id: course_id,
    answers: []
  });

  const navigate = useNavigate();

  useEffect(() => {
    async function quiz() {
      try {
        const data = await evaluationCourse(token, course_id);
        setQuestion(data.response._embedded.evaluation.questions);
        setSchema({...schema, evaluation_id: data.response._embedded.evaluation.id})
        console.log(data.response._embedded.evaluation.questions.length,'revisar');
      } catch (error) {
        console.error(error);
      }
    }
    quiz();
  }, []);

  useEffect(() => {
    const res = validateAnswers(page);
    setDisabled(!res);
    getStyleInput();
  }, [page, skipQuest]);

  const respuesta = (event, idQues, response) => {
    saveResponseStyle(idQues, response.id, event)
    const savedAnswer = [...schema.answers];
    const answers = savedAnswer.filter((e) => e.question_id != idQues);
    answers.push({ question_id: idQues, answer: response.id });
    setDisabled(false);
    setSchema({ ...schema, answers: answers });
  };

  const previousPage = () => {
    if (page === 0) {
      navigate(`/presentacion/evaluacion/${name}/${course_id}`);
    }
    page > 0 && setPage(page - 1);
  };

  const questionLength = question?.length;

  const nextPage = async (status) => {
    if (validateAnswers(page)) {
      page < (questionLength - 1) && setPage(page + 1);
      if (status) {
        const data = await registerAnswers(token,schema);
        const response = await generateCertificate(token ,id,course_id);
        setResults(response)

        Swal.fire({
          icon: 'success',
          title: 'Felicidades',
          text: `${data.message}`,
        })
        navigate(`/puntaje/${name}/${id}/${course_id}`);
      }
    }
  };

  const validateAnswers = (numPages) => {
    const getIdQuestion = question[numPages];
    const savedAnswer = [...schema.answers];
    try {
      const isExists = savedAnswer.filter(
        (e) => e.question_id === getIdQuestion.id
      );
      if (isExists.length === 0) {
        return false
      }
      return true;
    } catch (error) {
      return false;
    }
  };

  const saveResponseStyle = (idQues, idAns, event) => {
    const savedKeyCss = {};
    removeClass();
    event.target.classList.add(classSelected);
    savedKeyCss[idQues] = idAns;
    Object.assign(styleInputSelect.current, savedKeyCss);
  }

  const getStyleInput = () => {
    removeClass();
    const data = styleInputSelect.current;
    for (const key in data) {
      const attb = document.getElementById(`${key}-${data[key]}`);
      attb && attb.classList.add(classSelected);
    }
  }

  const handleScore = (params) => {
    console.log('parans', params)
  }

  const removeClass = () => {
    const allClassSeleted = document.querySelectorAll(`.${classSelected}`);
    allClassSeleted.forEach(e => {
      e.classList.remove(classSelected);
    });
  }

  const skipQuestion = () => {
    setPage(page);
    question?.find((quest, index) => {
      if(index === page){
        setQuestion(currentQuestion => {
          currentQuestion.splice(index, 1);
          currentQuestion.push(quest)
          setSkipQues(quest)
          return currentQuestion
        })
        return quest;
      }
      return null;
    });
  }

  return (
    <div className="preguntas__diagnostico evaluacion-xln-container">
      {/* <HeaderDashboard /> */}
      <Header/>
      <div className="preguntas__diagnostico-container">
        {question.length > 0 &&
          (
            <div className="preguntas__diagnostico-content">
              <h3>{question[page].question}</h3>
              <ul className="preguntas__diagnostico-list">
                {question[page]?.options.map((items, index) => (
                  <div
                    key={index}
                    className="preguntas__diagnostico-respuesta"
                  >
                    <input
                      id={items.question_id + "-" + items.id}
                      type="submit"
                      className="preguntas__diagnostico-checkbox"
                      onClick={(event) => respuesta(event, question[page].id, items)}
                      value={indexAlphabetic[index]}
                      name="course"
                    ></input>
                    <li>{items.response}</li>
                  </div>
                ))}
              </ul>
            </div>
          )
        }
      </div>

      <div className="row content-btn-evaluacion">
        <h2 className="text-center fw-bold" style={{color:'#000'}} >{page + 1} / {question.length} </h2>
        <div className="col-md-4">
          <button
            className="bg-secondary preguntas__footer-button_prev"
            onClick={previousPage}
          >
            Volver
          </button>
        </div>
        <div className="col-md-4">
          <button
            className="bg-warning preguntas__footer-button_prev"
            onClick={skipQuestion}
            disabled={page === questionLength - 1}
          >
            Saltar
          </button>
        </div>
        <div className="col-md-4">
          <button
            className="preguntas__footer-button_next"
            onClick={() => nextPage((question.length - 1) === page)}
            disabled={isDisabled}
          >
            {(question.length - 1) === page ? "Enviar respuestas" : "Siguiente"}
          </button>
        </div>
      </div>

        {/* <div className="preguntas__footer content-btn-evaluacion">
          <h2 className="text-center fw-bold" style={{color:'#000'}} >{page + 1} / {question.length} </h2>
          <button
            className="preguntas__footer-button_prev"
            onClick={previousPage}
          >
            Volver
          </button>
          <button
            className="preguntas__footer-button_next"
            onClick={() => nextPage((question.length - 1) == page)}
            disabled={isDisabled}
          >
            {(question.length - 1) == page ? "Enviar respuestas" : "Siguiente"}
          </button>
        </div> */}
     
    </div>
  );
};
