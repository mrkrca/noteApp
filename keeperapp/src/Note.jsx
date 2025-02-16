import React from "react";
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';


function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={()=> props.deleteNoteFunction(props.id)}><RemoveCircleRoundedIcon/></button>

    </div>
  );
}

export default Note;
