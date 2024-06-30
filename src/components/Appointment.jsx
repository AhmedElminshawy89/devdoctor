import { useEffect } from "react";
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import img from "../assets/image/dr3.jpg";
import { TiTick } from "react-icons/ti";

const Appointment = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS with the once option
  }, []);

  return (
    <section id="المواعيد" className="appointment">
      <div className="apointment-video" data-aos="fade-right" data-aos-delay="200">
        <img src={img} alt="" />
      </div>
      <div className="apointment-text" data-aos="fade-left" data-aos-delay="300">
        <h2>مواعيدنا</h2>
        <p>
          مرحبًا، حيث تعتبر تجارب المرضى الاستثنائية أولويتنا. مع الرعاية
          المتعاطفة، والمرافق المتطورة، والنهج الموجه نحو المريض، نحن ملتزمون
          بصحتك.
          <p>
            دكتور احمد شامه استشاري علاج الآلام المزمنة والعلاج التداخلي للعمود
            الفقري والمفاصل وآلام الأورام السرطانية{" "}
          </p>
          - ماجستير علاج الألم، جامعة القاهرة
          <br />
          - دكتوراه علاج الألم
          <br />
          - عضو الجمعية المصرية لعلاج الألم
          <br />
          ثق بنا في صحتك واستمتع بالفرق.
        </p>
        <div className="table-appointment-wrapper" data-aos="fade-up" data-aos-delay="400">
          <table className="table-appointment">
            <thead>
              <tr>
                <th className="right-raduis right-border-none">اليوم</th>
                <th>عيادة المقطم</th>
                <th>عيادة التجمع</th>
                <th className="left-raduis">عيادة شبين</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="right-border-none">السبت</td>
                <td className="clinic-cell"><TiTick className="tick-icon" /> 4:00 - 10:00</td>
                <td></td>
                <td className="bg-white"></td>
              </tr>
              <tr>
                <td className="right-border-none">الأحد</td>
                <td className="clinic-cell"><TiTick className="tick-icon" /> 4:00 - 10:00</td>
                <td></td>
                <td className="bg-white"></td>
              </tr>
              <tr>
                <td className="right-border-none">الإثنين</td>
                <td className="clinic-cell"><TiTick className="tick-icon" /> 4:00 - 10:00</td>
                <td></td>
                <td className="bg-white"></td>
              </tr>
              <tr>
                <td className="right-border-none">الثلاثاء</td>
                <td className="clinic-cell"><TiTick className="tick-icon" /> 4:00 - 10:00</td>
                <td></td>
                <td className="bg-white"></td>
              </tr>
              <tr>
                <td className="right-border-none">الأربعاء</td>
                <td className="clinic-cell"><TiTick className="tick-icon" /> 4:00 - 10:00</td>
                <td></td>
                <td className="bg-white"></td>
              </tr>
              <tr>
                <td className="right-border-none">الخميس</td>
                <td className="bg-white"></td>
                <td className="clinic-cell"><TiTick className="tick-icon" /> 9:00 - 11:00</td>
                <td className="bg-white"></td>
              </tr>
              <tr>
                <td className="right-border-none bottom-border-none">الجمعة</td>
                <td className="bottom-border-none bg-white"></td>
                <td className="bottom-border-none"></td>
                <td className="bottom-border-none clinic-cell"><TiTick className="tick-icon" /> 5:00 - 10:00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
