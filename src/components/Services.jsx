import { MdMedicalServices } from "react-icons/md";

const Services = () => {

  return (
    <section className="section__container service__container" data-aos="fade-up">
      <div className="service__header" data-aos="fade-down">
        <div className="service__header__content">
          <h2 className="section__header">خدمتنا الخاصة</h2>
          <p>
            بعيدًا عن تقديم الرعاية الطبية ببساطة، تكمن التزامنا في تقديم خدمة
            فريدة مصممة خصيصًا لاحتياجاتك الفريدة.
          </p>
        </div>
        <a href="https://wa.me/+201201818272" target="_blank" className="service__btn" data-aos="fade-down" data-aos-delay="100">للتواصل معنا</a>
      </div>
      <div className="service__grid">
        <div className="service__card" data-aos="zoom-in" data-aos-delay="200">
          <span>
            <MdMedicalServices />
          </span>
          <h4>الألم الشبحي (آلام ما بعد البتر)</h4>
          <p>
            الألم الشبحي، المعروف أيضًا بآلام ما بعد البتر، هو الألم الذي يمكن أن يشعر به الأفراد في الجزء المفقود من الجسم بعد إجراء عملية بتر، ويمكن أن يكون ذلك بسبب تغيرات في النظام العصبي المركزي والطرفي.
          </p>
          <a href="#خدماتنا">تعرف أكثر</a>
        </div>
        <div className="service__card" data-aos="zoom-in" data-aos-delay="300">
          <span>
            <MdMedicalServices />
          </span>
          <h4>العرق الزائد في اليدين والقدمين</h4>
          <p>
            العرق الزائد في اليدين والقدمين يمكن أن يكون مزعجًا ويؤثر على الراحة اليومية، حيث يتسبب في إفراز كميات زائدة من العرق دون سبب حراري ملحوظ، مما قد يؤدي إلى الإحراج وعدم الراحة النفسية.
          </p>
          <a href="#خدماتنا">تعرف أكثر</a>
        </div>
        <div className="service__card" data-aos="zoom-in" data-aos-delay="400">
          <span>
            <MdMedicalServices />
          </span>
          <h4>آلام الشوكة العظمية</h4>
          <p>
            آلام الشوكة العظمية تشير إلى الألم الذي يحدث في منطقة العظم العجزي (العظمة الكعبرة) في الكعب، ويمكن أن يكون نتيجة لالتهاب أو تهيج في الأوتار أو الأنسجة المحيطة بالمفصل.
          </p>
          <a href="#خدماتنا">تعرف أكثر</a>
        </div>
        <div className="service__card" data-aos="zoom-in" data-aos-delay="500">
          <span>
            <MdMedicalServices />
          </span>
          <h4>تشنج العضلات</h4>
          <p>
            تشنج العضلات هو انقباض غير إرادي ومفاجئ للعضلة، يمكن أن يحدث بشكل مؤلم وغالبًا ما يكون ناتجًا عن التعب، نقص الكهرليتات مثل البوتاسيوم أو الكالسيوم، الجفاف، أو إجهاد العضلات.
          </p>
          <a href="#خدماتنا">تعرف أكثر</a>
        </div>
        <div className="service__card" data-aos="zoom-in" data-aos-delay="600">
          <span>
            <MdMedicalServices />
          </span>
          <h4>الآلام المزمنة</h4>
          <p>
            الآلام المزمنة هي آلام تستمر لفترة طويلة تتجاوز الفترة العادية المتوقعة للشفاء، وقد تكون نتيجة لحالات صحية مثل التهاب المفاصل، أمراض العصبية، آلام الظهر، أو حالات أخرى مثل الصداع النصفي وآلام الشوكة العظمية.
          </p>
          <a href="#خدماتنا">تعرف أكثر</a>
        </div>
      </div>
    </section>
  );
};

export default Services;
