import React, { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { RiEditBoxLine } from "react-icons/ri";
import { RiDeleteBinLine } from "react-icons/ri";
import NoteForm from "./NoteForm";
const Note = ({
  notes,
  completenote,
  removeNote,
  clickHandler,
  updatenote,
}) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updatenote(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <noteForm edit={edit} onSubmit={submitUpdate} />;
  }

  return notes.map((note, index) => (
    <div
      className={note.isComplete ? "note-row complete" : "note-row"}
      key={index}
    >
      <div key={note.id} onClick={() => completenote(note.id)}>
        {note.text}
      </div>
      <div className="icons">
        <RiDeleteBinLine
          onClick={() => removeNote(note.id)}
          className="delete-icon"
        />
      </div>
    </div>
  ));
};

export default Note;



