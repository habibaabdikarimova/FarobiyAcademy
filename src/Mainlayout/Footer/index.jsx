import React from "react";
import c from "./style.module.scss";
import logo from "../../Assets/images/image 3.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className={c.footer}>
      <div className="container">
        <div className={c.footerData}>
          <Link>
            <img className={c.logo} src={logo} alt="" />
            <p>
              Biz sizga mahsulot sotish uchun bu yerda <br /> emasmiz, biz
              tajribamiz orqali
              <br /> qiymat sotamiz.
            </p>
          </Link>
          <div className={c.foolinks}>
            <div className={c.foolink}>
              <h5>Manzil</h5>
              <p>Toshkent shahri, Yunusobod tumani, ko'ch. Amir Temur 129B</p>
            </div>
            <div className={c.foolink}>
              <h5>Yordam</h5>
              <a href="tel:+998 91 7775411">+998 91 7775411</a>
              <p></p>
            </div>
            <div className={c.foolink}>
              <h5>Ijtimoiy tarmoqlar</h5>
              <div>
                <Link></Link>
                <Link></Link>
                <Link></Link>
                <Link></Link>
                <Link></Link>
              </div>
            </div>
          </div>
        </div>
        <div className={c.end}>
          <p>© 2023 Farobiy IT Academy</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
