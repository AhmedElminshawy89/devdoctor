import img from "../assets/image/doctor-1.jpg";
import img2 from "../assets/image/doctor-2.jpg";
import img3 from "../assets/image/doctor-3.jpg";
import img4 from "../assets/image/doctor-2.jpg";
const SecServices = () => {
  return (
    <section id="خدماتنا" className="section__container service__container">
      <div className="service__header">
        <div className="service__header__content">
          <h2 className="section__header">خدمتنا</h2>
          <p>
            بعيدًا عن تقديم الرعاية الطبية ببساطة، تكمن التزامنا في تقديم خدمة
            فريدة مصممة خصيصًا لاحتياجاتك الفريدة.
          </p>
        </div>
        <button className="service__btn">للتواصل عبر الواتساب</button>
      </div>
      <div className="service__grid">
        <div className="service__card">
          <div className="image">
            <img src={img} alt="" />
          </div>
          <h4>اختبار المختبر</h4>
          <p>
            تشخيص دقيق، نتائج سريعة: اختبر تجربة فحص المختبر عالي الجودة في
            مرفقنا.
          </p>
          <a href="#الرئيسية">للتواصل والحجز</a>
        </div>
        <div className="service__card">
          <div className="image">
            <img src={img2} alt="" />
          </div>
          <h4>اختبار المختبر</h4>
          <p>
            تشخيص دقيق، نتائج سريعة: اختبر تجربة فحص المختبر عالي الجودة في
            مرفقنا.
          </p>
          <a href="#الرئيسية">للتواصل والحجز</a>
        </div>
        <div className="service__card">
          <div className="image">
            <img src={img3} alt="" />
          </div>
          <h4>اختبار المختبر</h4>
          <p>
            تشخيص دقيق، نتائج سريعة: اختبر تجربة فحص المختبر عالي الجودة في
            مرفقنا.
          </p>
          <a href="#الرئيسية">للتواصل والحجز</a>
        </div>
        <div className="service__card">
          <div className="image">
            <img src={img3} alt="" />
          </div>
          <h4>اختبار المختبر</h4>
          <p>
            تشخيص دقيق، نتائج سريعة: اختبر تجربة فحص المختبر عالي الجودة في
            مرفقنا.
          </p>
          <a href="#الرئيسية">للتواصل والحجز</a>
        </div>
        <div className="service__card">
          <div className="image">
            <img src={img4} alt="" />
          </div>
          <h4>اختبار المختبر</h4>
          <p>
            تشخيص دقيق، نتائج سريعة: اختبر تجربة فحص المختبر عالي الجودة في
            مرفقنا.
          </p>
          <a href="#الرئيسية">للتواصل والحجز</a>
        </div>{" "}
        <div className="service__card">
          <div className="image">
            <img src={img} alt="" />
          </div>
          <h4>اختبار المختبر</h4>
          <p>
            تشخيص دقيق، نتائج سريعة: اختبر تجربة فحص المختبر عالي الجودة في
            مرفقنا.
          </p>
          <a href="#الرئيسية">للتواصل والحجز</a>
        </div>
      </div>
    </section>
  );
};

export default SecServices;
