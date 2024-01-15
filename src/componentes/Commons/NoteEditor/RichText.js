import React from "react";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { createNote, listedNotes } from "../../../services/services";
import { useSelector } from "react-redux";
import { useEffect } from "react";

import "../../../assets/css/screens/dashboards/StyleCourseRichText.css";

export const RichText = ({ videoCurrent }) => {
  const { token } = useSelector((state) => state.auth);
  const [value, setValue] = useState("");
  const [notes, setNotes] = useState([]);

  const [disabledNote, setdisabledNote] = useState(false);

  const time = videoCurrent?.currentTime;
  const lessonId = videoCurrent?.lessonId;
  
  function notesList() {
    try {
      listedNotes(token, lessonId)
      .then(evnt => {
        setNotes(evnt?.data?.notes)
      })
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    
    notesList();
    
  }, []);


  const pushNote = async () => {
    const note = value.replace(/<[^>]*>/g, "");
    
    try {
      setdisabledNote(true);
      const data = await createNote(token, note, time, lessonId);
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
                <div className="mt-2" key={index} >
              
                  <div class="card" style={{ width: "100%" }}>
                    <div class="card-body">
                      <h5 class="card-title">{item?.note}</h5>
                      <h6 class="card-subtitle mb-2 text-body-secondary">
                        {item?.text}
                      </h6>
                      <p class="card-text">{item?.content}</p>
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
