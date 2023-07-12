import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../../Assets/images/image 3.svg";
import call from "../../Assets/images/call.svg";

function Header() {
  let barRef = useRef();
  let courseRef = useRef();
  const showNavbar = () => {
    barRef.current.classList.toggle("bars");
    // console.log("salom");
  };

  const openCourses = () => {
    courseRef.current.classList.toggle("courses");
    // console.log(barRef);
  };
  return (
    <div className="container">
      <div className={"header"}>
        <Link className={"logo"} to={"/"}>
          <img src={logo} alt="" />
        </Link>
        <ul className={"rightelements"} ref={barRef}>
          <li onClick={showNavbar}>
            <Link to={"/teacher"}>Ustozlar</Link>
          </li>
          <li onClick={showNavbar}>
            <Link to={"/about"}>Biz haqimizda</Link>
          </li>
          <li onClick={showNavbar}>
            <Link onClick={openCourses}>Kurslar</Link>
          </li>
          <li>
            {" "}
            <select name="" id="">
              <option onClick={showNavbar} value="uz">
                Uz
              </option>
              <option onClick={showNavbar} value="ru">
                Ru
              </option>
            </select>
          </li>
          <li className="tel" onClick={showNavbar}>
            <img src={call} alt="" />
            <a href="tel:+998 91 7775411">+998 91 7775411</a>
          </li>
        </ul>
        <button className={"nav_bars"} onClick={showNavbar}>
          <AiOutlineMenu />
        </button>
        <div ref={courseRef} className="asd">
          <div className="course">
          <div> salom</div>
          <div>qanday</div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
