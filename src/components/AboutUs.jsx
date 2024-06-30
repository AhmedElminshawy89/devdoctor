import about from "../assets/image/dr.jpg";


const AboutUS = () => {

  return (
    <section className="section__container about__container" id="تعرف_علينا">
      <div className="about__content" data-aos="fade-left" data-aos-delay="400">
        <h2 className="section__header">معلومات عنا</h2>
        <p>
         نقدم خدمات متخصصة في علاج مجموعة متنوعة من الألم، بما في ذلك الإنزلاق الغضروفي، خشونة مفاصل الركبة والكتف والحوض، آلام العمود الفقري وعرق النسا، وآلام الظهر بعد العمليات.        </p>
        <p>
        كما تعالج ألم الوجه والصداع المزمن والنصفي والصداع التوتري والعنقودي، آلام العصب الخامس، اختناق الأعصاب والتهاباتها الطرفية، الألم الناتج عن الأورام السرطانية، الحزام الناري، الألم الشبحي بعد البتر        </p>
        <p>
        العرق الزائد في اليدين والقدمين، الشوكة العظمية، تشنج العضلات، والآلام المزمنة بشكل شامل من خلال استخدام علاجات شخصية مبنية على الدليل العلمي والتوجيهات السريرية المتقدمة.        </p>
      </div>
      <div className="about__image" data-aos="fade-right" data-aos-delay="400">
        <img src={about} alt="معلومات عنا" />
      </div>
    </section>
  );
};

export default AboutUS;
