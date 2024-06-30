

import img from "../assets/image/serv.jpg";
import img2 from "../assets/image/sev2.jpg";
import img3 from "../assets/image/sev3.jpg";
import img4 from "../assets/image/sev4.jpg";
import img5 from "../assets/image/sev5.jpg";
import img6 from "../assets/image/sev6.jpg";
import img7 from "../assets/image/sev7.jpg";
import img8 from "../assets/image/sev8.jpg";
import img9 from "../assets/image/sev9.webp";

const SecServices = () => {

  return (
    <section id="خدماتنا" className="section__container service__container">
      <div className="service__header" data-aos="fade-down" >
        <div className="service__header__content">
          <h2 className="section__header">خدمتنا</h2>
          <p>
            بعيدًا عن تقديم الرعاية الطبية ببساطة، تكمن التزامنا في تقديم خدمة
            فريدة مصممة خصيصًا لاحتياجاتك الفريدة.
          </p>
        </div>
        <a
          href="https://wa.me/+201201818272"
          target="_blank"
          className="service__btn"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          للتواصل عبر الواتساب
        </a>
      </div>
      <div className="service__grid">
        <div className="service__card" data-aos="fade-up" data-aos-delay="100">
          <div className="image">
            <img src={img} alt="" />
          </div>
          <h4>آلام الإنزلاق الغضروفي القطني والعنقي</h4>
          <p>
            الإنزلاق الغضروفي القطني والعنقي يشمل تلف الغضاريف بين فقرات العمود
            الفقري مما يسبب ضغطاً على الأعصاب مما ينتج عنه ألم في الظهر أو
            الرقبة ويمكن أن يتطلب علاجاً طبياً يتضمن علاجاً فيزيائياً أو استخدام
            أدوية لتخفيف الألم
          </p>
          <a href="#للتواصل_والحجز">للتواصل والحجز</a>
        </div>
        <div className="service__card" data-aos="fade-up" data-aos-delay="200">
          <div className="image">
            <img src={img2} alt="" />
          </div>
          <h4> آلام خشونة الركبة ومفاصل الكتف و الحوض </h4>
          <p>
            خدمة علاج آلام خشونة الركبة ومفاصل الكتف والحوض تتضمن التقييم الطبي
            المتخصص والعلاجات التي تشمل العلاج الطبيعي، والأدوية المسكنة للألم،
            وفي بعض الحالات الحقن الموضعي أو الجراحة إذا لزم الأمر، بهدف تحسين
            الوظيفة المفصلية وتقليل الألم وتحسين جودة الحياة للمرضى
          </p>
          <a href="#للتواصل_والحجز">للتواصل والحجز</a>
        </div>
        <div className="service__card" data-aos="fade-up" data-aos-delay="300">
          <div className="image">
            <img src={img3} alt="" />
          </div>
          <h4> آلام مابعد عمليات الظهر </h4>
          <p>
            آلام مابعد عمليات الظهر تشمل الألم المزمن والتي قد تظهر بعد الجراحة،
            ويتطلب علاجها تقييمًا شاملاً للحالة بواسطة فريق طبي متخصص يشمل
            علاجات متعددة مثل العلاج الطبيعي، والأدوية المسكنة للألم، والتدابير
            الإرشادية للنشاط البدني، بهدف تحقيق التئام الجراحة وتحسين الوظيفة
            الحركية للمريض.
          </p>
          <a href="#للتواصل_والحجز">للتواصل والحجز</a>
        </div>
        <div className="service__card" data-aos="fade-up" data-aos-delay="400">
          <div className="image">
            <img src={img4} alt="" />
          </div>
          <h4>آلام العمود الفقري وعرق النسا وآلام أسفل الظهر</h4>
          <p>
            الألم في العمود الفقري وآلام أسفل الظهر وعرق النسا هي أعراض شائعة
            تشير إلى مشاكل في الظهر قد تشمل التهابات العضلات أو التوتر العصبي.
          </p>
          <a href="#للتواصل_والحجز">للتواصل والحجز</a>
        </div>
        <div className="service__card" data-aos="fade-up" data-aos-delay="500">
          <div className="image">
            <img
              src={img5}
              alt="آلام الوجه والصداع المزمن والنصفي والصداع التوتري أو العنقودي"
            />
          </div>
          <h4>آلام الوجه والصداع المزمن والنصفي والصداع التوتري أو العنقودي</h4>
          <p>
            هذه الخدمة تتضمن تقييم الألم الوجهي والصداع المزمن والنصفي والصداع
            التوتري أو العنقودي، وتقديم خيارات العلاج المناسبة بما في ذلك
            الأدوية والعلاجات التداخلية.
          </p>
          <a href="#للتواصل_والحجز">للتواصل والحجز</a>
        </div>
        <div className="service__card" data-aos="fade-up" data-aos-delay="600">
          <div className="image">
            <img src={img6} alt="" />
          </div>
          <h4>آلام العصب الخامس</h4>
          <p>
            العصب الخامس هو العصب الثلاثي التوائم (العصب التثلث) في الجهاز
            العصبي، وهو يلعب دورًا هامًا في نقل الإشارات الحسية من الوجه وفروة
            الرأس إلى المخ.
          </p>
          <a href="#للتواصل_والحجز">للتواصل والحجز</a>
        </div>
        <div className="service__card" data-aos="fade-up" data-aos-delay="700">
          <div className="image">
            <img src={img7} alt="" />
          </div>
          <h4> آلام اختناق والتهابات الأعصاب الطرفية</h4>
          <p>آلام الاختناق والتهابات الأعصاب الطرفية تعتبر من المشاكل الصحية التي قد تسبب تأثيرات مؤلمة ومزعجة على الأفراد.</p>
          <a href="#للتواصل_والحجز">للتواصل والحجز</a>
        </div>
        <div className="service__card" data-aos="fade-up" data-aos-delay="800">
          <div className="image">
            <img src={img8} alt="" />
          </div>
          <h4> آلام الأورام السرطانية </h4>
          <p>آلام الأورام السرطانية تتفاوت في شدتها وممكن أن تكون مصاحبة لأعراض أخرى مرتبطة بالورم نفسه أو بالعلاجات المستخدمة لمكافحته.</p>
          <a href="#للتواصل_والحجز">للتواصل والحجز</a>
        </div>
        <div className="service__card" data-aos="fade-up" data-aos-delay="900">
          <div className="image">
            <img src={img9} alt="" />
          </div>
          <h4> آلام الحزام الناري</h4>
          <p>آلام الحزام الناري هي حالة مؤلمة ناتجة عن فيروس الحلأ النطاقي، حيث تظهر طفح جلدي مصاحبًا لألم شديد يمتد على شكل حزام حول الجسم في منطقة معينة.</p>
          <a href="#للتواصل_والحجز">للتواصل والحجز</a>
        </div>
      </div>
    </section>
  );
};

export default SecServices;
