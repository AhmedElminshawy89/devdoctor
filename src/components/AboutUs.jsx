import about from "../assets/image/about.jpg";

const AboutUS = () => {
  return (
    <section className="section__container about__container" id="تعرف_علينا">
      <div className="about__content">
        <h2 className="section__header">معلومات عنا</h2>
        <p>
          مرحبًا بكم في موقع الرعاية الصحية الخاص بنا، وجهتك الشاملة للحصول على معلومات صحية موثوقة وشاملة. نحن ملتزمون بتعزيز الصحة وتوفير الموارد القيمة لتمكينك في رحلتك الصحية.
        </p>
        <p>
          استكشف مجموعتنا الواسعة من المقالات الإرشادية والمواد التوجيهية التي تغطي مجموعة واسعة من الموضوعات الصحية. من فهم الحالات الطبية الشائعة إلى نصائح الحفاظ على نمط حياة صحي، تم تصميم محتوياتنا لتثقيفك، وإلهامك، ودعمك في اتخاذ قرارات صحية مستنيرة.
        </p>
        <p>
          اكتشف نصائح صحية عملية وإرشادات للحياة لتحسين صحتك الجسدية والعقلية. نحن نؤمن بأن التغييرات الصغيرة يمكن أن تؤدي إلى تحسينات كبيرة في جودة حياتك، ونحن هنا لنرشدك في طريقك نحو حياة أكثر صحة وسعادة.
        </p>
      </div>
      <div className="about__image">
        <img src={about} alt="معلومات عنا" />
      </div>
    </section>
  );
};

export default AboutUS;