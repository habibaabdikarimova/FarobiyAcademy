import React from "react";
import Button from "../button";
import img from "../../Assets/images/logoImg.png";
import c from "./style.module.scss";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";

function FormCard() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const send = (data) => {
    console.log(data);
  };
  return (
    <div className={c.formcard}>
      <div className={c.leftcard}>
        <h3>Tanlovda yordam beramiz!</h3>
        <p>
          Kurs haqida savollaringiz bo'lsa yoki yo'nalish tanlashda
          ikkilansangiz, raqamingizni qoldiring - biz barcha savollaringizga
          javob beramiz.
        </p>
        <img src={img} alt="" />
      </div>
      <form onSubmit={handleSubmit(send)}>
        <input
          {...register("name", {required: true})}
          className={c.input}
          type="text"
          name=""
          id=""
          placeholder="Ismingiz"
        />
        {errors.name && <span>This field is required</span>}

        <input
          className={c.input}
          {...register("tel", {required:true})}
        type="number"          name=""
          id=""
          placeholder="Telefon nomeringiz"
        />
        {errors.tel && <span>This field is required</span>}

        <input
          className={c.input}
          {...register("mail", {required:true})}
          type="email"
          name=""
          id=""
          placeholder="Pochtangiz"
        />
        {errors.mail && <span>This field is required</span>}
        <button>send</button>
      </form>
    </div>
  );
}

export default FormCard;
