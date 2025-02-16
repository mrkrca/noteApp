import React, {useState} from "react";
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {

const [isExpanded, setExpanded] = useState(false);
    

function expanded() {
    setExpanded(true);
}

  return (
    <div>
      
      <form  className="create-note">
        <input onClick={expanded} onChange={props.onChangeTitleFunction} value={props.noteTitle} name="title" placeholder="Title" required/>
      
      {isExpanded && <textarea onChange={props.onChangeContentFunction} value={props.noteContent}  name="content" placeholder="Take a note..." rows={isExpanded? "3" : "1"} required/>}
       
    {isExpanded ?  <Zoom in={true}>
        <Fab onClick={props.onClickFunction}><AddBoxRoundedIcon/></Fab>
        </Zoom> : null}
        
      </form>
      
    </div>
  );
}

export default CreateArea;
