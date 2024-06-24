import img from "../assets/image/dr3.jpg";
const Appointment = () => {
  return (
    <section id="المواعيد" className="appointment">
      <div className="apointment-video">
        <img src={img} alt="" />
      </div>
      <div className="apointment-text">
        <h2>مواعيدنا</h2>
        <p>
              مرحبًا، حيث تعتبر تجارب المرضى الاستثنائية أولويتنا. مع الرعاية المتعاطفة، والمرافق المتطورة، والنهج الموجه نحو المريض، نحن ملتزمون بصحتك.
              <p>دكتور احمد شامه استشاري علاج الآلام المزمنة والعلاج التداخلي للعمود الفقري والمفاصل وآلام الأورام السرطانية </p>
              {/* <br /> */}
              - ماجستير علاج الألم، جامعة القاهرة
              <br />
              - دكتوراه علاج الألم
              <br />
              - عضو الجمعية المصرية لعلاج الألم
              <br />
              ثق بنا في صحتك واستمتع بالفرق.
            </p>
        <div className="table-appointment">
          <div className="box-day">
            <div className="day">عيادة المقطم</div>
            <div className="day">من السبت للأربعاء</div>
            <div className="day-hour">4:00 - 10:00</div>
          </div>
          <div className="box-day">
            <div className="day"> عيادة التجمع</div>
            <div className="day">الخميس</div>
            <div className="day-hour">9:00 - 11:00</div>
          </div>
          <div className="box-day">
            <div className="day">عيادة شبين</div>
            <div className="day">الجمعه</div>
            <div className="day-hour">5:00 - 10:00</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
