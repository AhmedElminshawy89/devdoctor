import img from "../assets/image/about.jpg";
const Appointment = () => {
  return (
    <section id="المواعيد" className="appointment">
      <div className="apointment-video">
        <img src={img} alt="" />
      </div>
      <div className="apointment-text">
        <h2>مواعيدنا</h2>
        <p>
          مرحبًا بكم في موقع الرعاية الصحية الخاص بنا، وجهتك الشاملة للحصول على معلومات صحية موثوقة وشاملة. نحن ملتزمون بتعزيز الصحة وتوفير الموارد القيمة لتمكينك في رحلتك الصحية.
        </p>
        <p>
          استكشف مجموعتنا الواسعة من المقالات الإرشادية والمواد التوجيهية التي تغطي مجموعة واسعة من الموضوعات الصحية. من فهم الحالات الطبية الشائعة إلى نصائح الحفاظ على نمط حياة صحي، تم تصميم محتوياتنا لتثقيفك، وإلهامك، ودعمك في اتخاذ قرارات صحية مستنيرة.
        </p>
        <p>
          اكتشف نصائح صحية عملية وإرشادات للحياة لتحسين صحتك الجسدية والعقلية. نحن نؤمن بأن التغييرات الصغيرة يمكن أن تؤدي إلى تحسينات كبيرة في جودة حياتك، ونحن هنا لنرشدك في طريقك نحو حياة أكثر صحة وسعادة.
        </p>
        <div className="table-appointment">
            <div className="box-day">
            <div className="day">السبت</div>
            <div className="day-hour">9:00 - 12:00</div>
            </div>
            <div className="box-day">
            <div className="day">الاحد</div>
            <div className="day-hour">9:00 - 12:00</div>
            </div>
            <div className="box-day">
            <div className="day">الاثنين</div>
            <div className="day-hour">9:00 - 12:00</div>
            </div>
            <div className="box-day">
            <div className="day">الثلاثاء</div>
            <div className="day-hour">9:00 - 12:00</div>
            </div>
            <div className="box-day">
            <div className="day">الاربعاء</div>
            <div className="day-hour">9:00 - 12:00</div>
            </div>
            <div className="box-day">
            <div className="day">الخميس</div>
            <div className="day-hour">9:00 - 12:00</div>
            </div>
            <div className="box-day">
            <div className="day">الجمعه</div>
            <div className="day-hour">لا يوجد عمل</div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
