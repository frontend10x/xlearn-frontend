import React from "react";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export const RichText = () => {
  const [value, setValue] = useState("");

  const createNote = () => {
    console.log(value,'valores');
  }

  return (
    <div>
      <ReactQuill theme="snow" value={value} onChange={setValue} />
      <div className="mt-5 d-flex justify-content-end">
        <div className="">
          <button
            className="btn bg-dark text-light fw-bold"
            style={{ fontSize: "20px" }}
            onClick={createNote}
          >
            {" "}
            Crear nota{" "}
          </button>
        </div>
      </div>
    </div>
  );
};
