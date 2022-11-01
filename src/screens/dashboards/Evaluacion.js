import React, { useState, useEffect, useRef, createRef } from "react";
import { evaluationCourse, quizDiagnostic, registerAnswers, registerDiagnostic } from "../../services/services";
import { useSelector } from "react-redux/es/exports";
import { HeaderDashboard } from "../../componentes/dashboards/HeaderDashboard";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

export const Evaluacion = () => {
  const { token, groups } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [question, setQuestion] = useState([]);
  const { id } = useParams();
  const [page, setPage] = useState(0);
  const [perPage, setPerpage] = useState(1);
  const indexAlphabetic = ["A", "B", "C", "D"];
  const [isDisabled, setDisabled] = useState(true);
  const styleInputSelect = useRef({});
  const classSelected = "preguntas__diagnostico-checkbox-selected";

  const [schema, setSchema] = useState({
    evaluation_id: 24,
    user_id: id,
    course_id: 1,
    answers: []
  });

  useEffect(() => {
    async function quiz() {
      try {
        const data = await evaluationCourse(token, id);
        setQuestion(data.response._embedded.evaluation.questions)
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
  }, [page]);

  const respuesta = (event, idQues, response) => {
    saveResponseStyle(idQues, response.id, event)
    const savedAnswer = [...schema.answers];
    const answers = savedAnswer.filter((e) => e.question_id != idQues);
    answers.push({ question_id: idQues, answer: response.id });
    setDisabled(false);
    setSchema({ ...schema, answers: answers });
  };

  const previousPage = () => {
    if (page == 0) {
      console.log("Regresar a la pagina anterior");
    }
    page > 0 && setPage(page - 1);
  };

  const nextPage = async (status) => {
    const questionLength = question.length;
    if (validateAnswers(page)) {
      page < (questionLength - 1) && setPage(page + 1);
      if (status) {
        console.log("Listo para enviar");
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
      }
      return true;
    } catch (error) {
      return false;
    }
  };

  const saveResponseStyle = (idQues, idAns, event) => {
    const savedKeyCss = new Object();
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

  const removeClass = () => {
    const allClassSeleted = document.querySelectorAll(`.${classSelected}`);
    allClassSeleted.forEach(e => {
      e.classList.remove(classSelected);
    });
  }

  return (
    <div className="preguntas__diagnostico">
      <HeaderDashboard />
      <div className="preguntas__diagnostico-container">
        {question.length > 0 &&
          (
            <div className="preguntas__diagnostico-content">
              <h3>{question[page].question}</h3>
              <ul className="preguntas__diagnostico-list">
                {question[page].options.map((items, index) => (
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
            onClick={() => nextPage((question.length - 1) == page)}
            disabled={isDisabled}
          >
            {(question.length - 1) == page ? "Enviar respuestas" : "Siguiente"}
          </button>
        </div>
      </div>
    </div>
  );
};
