import React from "react";
import c from './style.module.scss';
import Button from "../../Component/button";
import { Link } from "react-router-dom";
import showImg from '../../Assets/images/Ellipse 2.png'
import About from "../../Component/About";
import Courses from "../../Component/Courses";
import Teachers from "../../Component/Teachers";
import FormCard from "../../Component/FormCard";


function Home() {
  return (
    <div className="container">
      
      <div className={c.showNavbar}>
        <div className={c.textBox}>
          {" "}
          <h3 className={c.subtitle}>Zamonaviy IT o'quv markazi</h3>
          <h1 className={c.showtitle}>
            Zamonaviy kasblarni <br /> <span>Farobiy Academyda</span> malakali mutaxasislardan
            o'rganing.
          </h1>
          <p className={c.shownavbartext}>
            Biz sizga qulay vaqtda, joyda va uslubda zamonaviy kasblarni
            o'rganish va ish boshlashingizda yordam beramiz
          </p>
          <Link>
          <Button btnTitle={'Kurslarni tanlash'} />
          </Link>
        </div>
        <img className={c.shownavbarimg} src={showImg} alt="" />
      </div>
      <main>
        <Courses />
        <About />
        <Teachers />
        <FormCard />
      </main>
    </div>
  );
}

export default Home;
