import React from "react";
import "./ToDo.css";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

const ToDo = (props) => {
  function updateMode() {
    props.setPopupVisible(true);
  }

  return (
    <div className="todo">
      <div className="text">{props.text}</div>
      <div className="icons">
        <BiEdit className="icon" onClick={updateMode} />
        <AiFillDelete className="icon" onClick={props.deleteToDo} />
      </div>
    </div>
  );
};

export default ToDo;
