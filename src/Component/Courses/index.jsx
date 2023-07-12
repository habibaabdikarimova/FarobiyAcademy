import React from "react";
import c from "./style.module.scss";
// import newcourse from "../../Assets/images/newcouerse.png";
import Button from "../button";
import { Link } from "react-router-dom";

function Courses() {
  return (
    <div className={c.Courses}>
      <div className={[c.course, c.course1].join("")}>
        {" "}
        <p>Dasturlashga kirish</p>
        <Link to={"/minlt"}>
          <Button btnTitle={"Batafsil "} />
        </Link>
      </div>
      <div className={[c.course, c.course2].join("")}>
        {" "}
        <p>Web development</p>
        <Link to={'/minlt'}>
          <Button btnTitle={"Batafsil"} />
        </Link>
      </div>
      <div className={[c.course, c.course3].join("")}>
        {" "}
        <p>Mobiledevelopment</p>
        <Link >
          <Button btnTitle={"Batafsil"} />
        </Link>
      </div>
      <div className={[c.course, c.course4].join("")}>
        {" "}
        <p>Grafik dizayner</p>
        <Link>
          <Button btnTitle={"Batafsil"} />
        </Link>
      </div>
      <div className={[c.course, c.course5].join("")}>
        {" "}
        <p>Videomontaj va maxsus effektlar</p>
        <Link>
          <Button btnTitle={"Batafsil"} />
        </Link>
      </div>
      <div className={[c.course, c.course6].join("")}>
        {" "}
        <p>Robotexnika</p>
        <Link>
          <Button btnTitle={"Batafsil"} />
        </Link>
      </div>
      <div className={[c.course, c.course7].join("")}>
        {" "}
        <p>Logistika broketligi</p>
      </div>

      {/* /<img className={[c.course, c.course7].join("")} src={newcourse} alt="" /> */}
    </div>
  );
}

export default Courses;
