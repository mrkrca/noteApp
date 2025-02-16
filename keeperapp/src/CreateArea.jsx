import React from "react";

function CreateArea(props) {
  return (
    <div>
      <form>
        <input onChange={props.onChangeTitleFunction} value={props.noteTitle} name="title" placeholder="Title" />
        <textarea onChange={props.onChangeContentFunction} value={props.noteContent}  name="content" placeholder="Take a note..." rows="3" />
        <button onClick={props.onClickFunction}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
