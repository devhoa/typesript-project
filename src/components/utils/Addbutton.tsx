import React from "react";
import "../../css/Addbutton.css";

export interface Props {
  icon: string;
  title: string;
}

const Addbutton: React.FC<Props> = (props: Props) => {
  return (
    <button type="button" className="btn add-btn w-100">
      <img className="icon" src={props.icon} alt="" />
      <span className="text">{props.title}</span>
    </button>
  );
};

export default Addbutton;
