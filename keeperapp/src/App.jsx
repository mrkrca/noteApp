import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import "./App.css";

function App() {




  const [noteContent, setNoteContent] = useState("");
  const [noteTitle, setNoteTitle] = useState("");

  const [notes, setNotes] = useState([]);

  function handleTitleInput(event) {
    setNoteTitle(event.target.value);
  }

  function handleContentInput(event) {
    setNoteContent(event.target.value);
  }

  function handleClick(event) {
    event.preventDefault();
    setNotes((previousNotes) => [
      ...previousNotes,
      { title: noteTitle, content: noteContent }
    ]);
    setNoteTitle("");
    setNoteContent("");
  }

  function deleteNote(id) {
    setNotes(previousNotes => previousNotes.filter((_, index) => index !== id));
  }


  return (
    <div>
      <Header />
      <CreateArea
        onChangeTitleFunction={handleTitleInput}
        onChangeContentFunction={handleContentInput}
        onClickFunction={handleClick}
        noteTitle={noteTitle}
        noteContent={noteContent}
      />
      {notes.map((noteItem, index) => (
        <Note key={index} id={index} title={noteItem.title} content={noteItem.content} deleteNoteFunction={deleteNote} />
      ))}
      <Footer />
    </div>
  );
}

export default App;