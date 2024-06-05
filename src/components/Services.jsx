import { RiMicroscopeLine, RiMentalHealthLine, RiHospitalLine } from 'react-icons/ri';

const Services = () => {
  return (
    <section className="section__container service__container">
      <div className="service__header">
        <div className="service__header__content">
          <h2 className="section__header">خدمتنا الخاصة</h2>
          <p>
            بعيدًا عن تقديم الرعاية الطبية ببساطة، تكمن التزامنا في تقديم خدمة فريدة مصممة خصيصًا لاحتياجاتك الفريدة.
          </p>
        </div>
        <button className="service__btn">اسأل عن الخدمة</button>
      </div>
      <div className="service__grid">
        <div className="service__card">
          <span><RiMicroscopeLine /></span>
          <h4>اختبار المختبر</h4>
          <p>
            تشخيص دقيق، نتائج سريعة: اختبر تجربة فحص المختبر عالي الجودة في مرفقنا.
          </p>
          <a href="#">تعرف أكثر</a>
        </div>
        <div className="service__card">
          <span><RiMentalHealthLine /></span>
          <h4>الفحص الصحي</h4>
          <p>
            تقييماتنا الدقيقة والتقييمات الخبرية تساعدك على البقاء نشطًا فيما يتعلق بصحتك.
          </p>
          <a href="#">تعرف أكثر</a>
        </div>
        <div className="service__card">
          <span><RiHospitalLine /></span>
          <h4>طب الأسنان العام</h4>
          <p>
            احصل على رعاية فموية شاملة مع طب الأسنان. ثق بنا في الحفاظ على ابتسامتك صحية ومشرقة.
          </p>
          <a href="#">تعرف أكثر</a>
        </div>
      </div>
    </section>
  );
};

export default Services;
