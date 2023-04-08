import React from "react";
import "./Button.css";

const STYLES = [
  "btn--primary--solid",
  "btn--warning--solid",
  "btn--danger--solid",
  "btn--success--solid",
  "btn--primary--outline",
  "btn--warning--outline",
  "btn--danger--outline",
  "btn--success--outline",
];

interface Props {
  text: String;
  type?: any;
  onClick: () => void;
  buttonStyle: any;
}


const Button = ({ text, type, onClick, buttonStyle }: Props) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  return (
    <button className={`btn ${checkButtonStyle}`} onClick={onClick} type={type}>
      {text}
    </button>
  );
};

export default Button;
