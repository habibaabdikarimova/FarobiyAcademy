import React from "react";
import img from "../../Assets/images/Avatar.png";
import imgdasturlash from "../../Assets/images/DasturlashUstozi.png";
import imgdizayn from "../../Assets/images/Dizayn.svg";
import c from "./style.module.scss";
import montaj from '../../Assets/images/montaj.svg'

function Teachers() {
  return (
    <div className={c.teachers}>
      <div>
        <img src={img} alt="" />
        <h4>Qalandarov Abdulaziz</h4>
        <div className={c.field}>
          <img src={imgdasturlash} alt="" />
          <p>Frontend</p>
        </div>
      </div>
      <div>
        <img src={img} alt="" />
        <h4>Doniyor</h4>
        <div className={c.field}>
          <img src={montaj} alt="" />
          <p>Video montaj</p>
        </div>
      </div>
      <div>
        <img src={img} alt="" />
        <h4>Sayfiyev Eldor</h4>
        <div className={c.field}>
          <img src={imgdasturlash} alt="" />
          <p>3d animatsiya</p>
        </div>
      </div>
      <div>
        <img src={img} alt="" />
        <h4>Abdug'ani Ibragimov</h4>
        <div className={c.field}>
          <img src={imgdasturlash} alt="" />
          <p></p>
        </div>
      </div>
      <div>
        <img src={img} alt="" />
        <h4>Feruzbek</h4>
        <div className={c.field}>
          <img src={imgdasturlash} alt="" />
          <p>Robotexnika</p>
        </div>
      </div>
      <div>
        <img src={img} alt="" />
        <h4>Nurjaxon</h4>
        <div className={c.field}>
          <img src={imgdizayn} alt="" />
          <p>Grafik dizayner</p>
        </div>
      </div>
      <div>
        <img src={img} alt="" />
        <h4>Olimjonov Qosimjon</h4>
        <div className={c.field}>
          <img src={imgdasturlash} alt="" />
          <p>Foundation</p>
        </div>
      </div>
    </div>
  );
}

export default Teachers;
