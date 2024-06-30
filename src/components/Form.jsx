import React, { useRef, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

const Form = () => {
  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();
  
    const formData = new FormData(form.current);
    let isFormValid = true;
  
    for (let pair of formData.entries()) {
      if (!pair[1]) {
        isFormValid = false;
        break;
      }
    }
  
    if (!isFormValid) {
      toast.error("يرجى ملء جميع الحقول بالكامل");
      return;
    }
  
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
      <h2 className="section__header" data-aos="fade-right">للتواصل والحجز</h2>
      <p data-aos="fade-left">
        احجز تجربة فريدة واستمتع برعاية صحية متميزة تضمن لك الراحة والاطمئنان.
      </p>
      <div className="header__form" data-aos="fade-up">
        <form onSubmit={sendEmail} ref={form}>
          <h4>احجز الآن</h4>
          <input type="text" placeholder="الاسم" name="الاسم" data-aos="fade-up" data-aos-delay="100" />
          <input
            type="email"
            placeholder="البريد الالكتروني"
            name="البريد الالكتروني"
            data-aos="fade-up" data-aos-delay="200"
          />
          <input type="text" placeholder="العنوان" name="العنوان" data-aos="fade-up" data-aos-delay="300" />
          <input type="number" placeholder="رقم الهاتف" name="رقم الهاتف" data-aos="fade-up" data-aos-delay="400" />
          <select
            name="العياده"
            placeholder="اختر العياده التي تريد الحجز بها"
            id=""
            data-aos="fade-up" data-aos-delay="500"
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
            data-aos="fade-up" data-aos-delay="600"
          />
          <button className="btn form__btn" data-aos="fade-up" data-aos-delay="600">حجز موعد</button>
        </form>
      </div>
    </section>
  );
};

export default Form;
