import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_152tdea", "template_e5b6ujs", form.current, {
        publicKey: "1yPpz24hEvwJNhsg7",
      })
      .then(
        (response) => {
          toast.success("تم الحجز بنجاح");
          console.log("Email successfully sent!", response);
          form.current.reset();
        },
        (error) => {
          console.error("Email sending failed:", error);
        }
      );
  };

  return (
    <section id="للتواصل_والحجز" className="contact-us">
      <h2 className="section__header">للتواصل والحجز</h2>
      <p>
        احجز تجربة فريدة واستمتع برعاية صحية متميزة تضمن لك الراحة والاطمئنان.{" "}
      </p>
      <div className="header__form">
        <form onSubmit={sendEmail} ref={form}>
          <h4>احجز الآن</h4>
          <input type="text" placeholder="الاسم" name="الاسم" />
          <input
            type="email"
            placeholder="البريد الالكتروني"
            name="البريد الالكتروني"
          />
          <input type="text" placeholder="العنوان" name="العنوان" />
          <input type="number" placeholder="رقم الهاتف" name="رقم الهاتف" />
          <select
            name="العياده"
            placeholder="اختر العياده التي تريد الحجز بها"
            id=""
          >
            <option disabled>اختر العياده التي تريد الحجز بها</option>
            <option value="عياده التجمع">عياده التجمع</option>
            <option value="عياده المقطم">عياده المقطم</option>
            <option value="عياده شبين">عياده شبين</option>
          </select>
          <textarea
            type="text"
            rows={6}
            placeholder="ملاحظه او طلب"
            name="طلبك"
          />
          <button className="btn form__btn">حجز موعد</button>
        </form>
      </div>
    </section>
  );
};

export default Form;
