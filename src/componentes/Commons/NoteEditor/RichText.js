import React from "react";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";

import "../../../assets/css/screens/dashboards/StyleCourseRichText.css";
import { Badge } from "react-bootstrap";
import { secondsToTimeFormat } from "../../../utils/video.utils";
import { changeStateNote, createNote, listedNotes } from "../../../services/apis/lessons.services";

export const RichText = ({ videoCurrent }) => {
  const { token } = useSelector((state) => state.auth);
  const [value, setValue] = useState("");
  const [notes, setNotes] = useState([]);

  const [disabledNote, setdisabledNote] = useState(false);

  const timeSecond = videoCurrent?.currentTime;
  const lessonId = videoCurrent?.lessonId;
  
  function notesList() {
    try {
      listedNotes(lessonId)
      .then(evnt => {
        setNotes(evnt?.data?.notes)
      })
    } catch (error) {
      console.error(error);
    }
  }

  const removeNote = async (noteId) => {
    try {
      const resp = await changeStateNote(noteId, 0);
      console.log("resp", resp);
      notesList();
    } catch (error) {
      console.error(error, "error");
    }
  };

  useEffect(() => {
    notesList();
  }, []);


  const pushNote = async () => {
    const note = value.replace(/<[^>]*>/g, "");
    
    try {
      setdisabledNote(true);
      const data = await createNote(note, timeSecond, lessonId);
      console.log(data);
      notesList();
    } catch (error) {
      console.error(error, "error");
    } finally{
      setdisabledNote(false);
    };
  };
  
  
  return (
    <div className="w-100 content_RichText" style={{backgroundColor:"#01202d"}} >
      <ReactQuill theme="snow" value={value} onChange={setValue} />
      <div className="mt-5 d-flex justify-content-end">
        <div className="">
          <button
            className="btn bg-dark text-light fw-bold btn-notas-course"
            style={{ fontSize: "20px" }}
            onClick={pushNote}
            disabled={disabledNote} 
          >
            {" "}
            Crear nota{" "}
          </button>
        </div>
      </div>
      <main className="mt-5">
      <h2 className="title-card_richText">Resumen de tus notas</h2>
        <div className="container">
          {notes &&
            notes.map((item,index) => {
              return (
                <div className="mt-2" key={index}>
                  <div className="card" style={{ width: "100%" }}>
                    <div className="card-body d-flex justify-content-between align-items-center">
                      <Badge
                        pill
                        bg="secondary"
                        className="d-inline"
                        style={{ cursor: "pointer" }}
                      >
                        {secondsToTimeFormat(item?.timeSecond) || "00:00"}
                      </Badge>
                      <h5 className="card-title d-flex align-items-left m-0">
                        {item?.note}
                      </h5>
                      <Badge
                        bg="danger"
                        className="d-inline"
                        style={{ cursor: "pointer" }}
                        onClick={() => removeNote(item.id)}
                      >
                        x
                      </Badge>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </main>
    </div>
  );
};


{/* <div className="d-flex">
  <Badge bg="danger" className="d-inline align-self-center">
    9
  </Badge>
</div>; */}

    {
      /* <h6 className="card-subtitle mb-2 text-body-secondary">
                        {item?.text}
                      </h6>
                      <p className="card-text">{item?.content}</p> */
    }