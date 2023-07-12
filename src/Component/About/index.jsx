import React from "react";
import img1 from '../../Assets/images/Frame 3366.png';
import img2 from '../../Assets/images/Frame3.png';
import c from './style.module.scss';

function About() {
  return (
    <div className="">
      <h2>Biz haqimizda</h2>
      <div className={c.about} >
        <div className={c.aboutcards}>
          <img className={c.aboutcard1} src={img1} alt="" />
          <div className={c.aboutcard2}>
            <img className="" src="" alt="" />
            <p>Farobiy IT Academy - da biz oddiy ko'rinadigan yaratish harakati odamlar hayotida o'sish.</p>
          </div>
          <img className={c.aboutcard3} src={img2} alt="" />
          <div className={c.aboutcard4}>
            <img src="" alt="" />
            <p>Farobiy IT Academy - bu illyustratsiya, dizayn, fotografiya, video, freelancing va boshqa mavzularda ijodiy va qiziquvchan.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
