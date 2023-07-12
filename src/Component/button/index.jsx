import React from "react";
import c from "./style.module.scss";

function Button({ btnTitle }) {
  return (
      <button className={c.button} to={'/login'} >
        {btnTitle}
      </button>
  
  );
}

export default Button;
