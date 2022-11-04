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
  const {id} = useParams();
  const [page, setPage] = useState(0);
  const [perPage, setPerpage] = useState(1);
  const indexAlphabetic = ["A", "B", "C", "D"];
  const [isDisabled, setDisabled] = useState(true);
  const [evaluationID, setEvaluationID] = useState();

  const [schema, setSchema] = useState({
    evaluation_id: "",
    user_id: id,
    course_id: evaluationID,
    answers: []
  });

  useEffect(() => {
    async function quiz() {
      try {
        const data = await evaluationCourse(token, id);
        setQuestion(data.response._embedded.evaluation.questions)
        setEvaluationID(data.response._embedded.evaluation.id)
      } catch (error) {
        console.error(error);
      }
    }
    quiz();
  }, []);

  useEffect(() => {
    // console.clear();
    if (page != undefined) {
      const res = validateAnswers(page);
      console.log(page, res);
      setDisabled(!res);
    }
  }, [page]);

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
    // const questionLength = question.length;
    // if (validateAnswers(page - 1)) {
    //   page < questionLength && setPage(page + 1);
    //   if (status) {
    //    const result = await registerAnswers(schema)
    //     console.log("Fin del cuestionario");
    //   }
    // }
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

  // .slice((page - 1) * perPage, (page - 1) * perPage + perPage)
  return (
    <div className="preguntas__diagnostico">
      <HeaderDashboard />
      <div className="preguntas__diagnostico-container">
        {question.length > 0 &&
          Object.keys(question[0]).map((item, index) => {
            // return(<h1>{item.question}</h1>)
              return(
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
            ) 
          })}
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
            // onClick={() => nextPage(question.length == page)}
            disabled={isDisabled}
          >
            {/* {question.length == page ? "Enviar respuesta" : "Siguiente"} */}
          </button>
        </div>
      </div>
    </div>
  );
};
