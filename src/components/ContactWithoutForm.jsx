import gallery01 from "../assets/image/about.jpg";
import gallery02 from "../assets/image/doctor-1.jpg";
import gallery03 from "../assets/image/doctor-2.jpg";
import gallery04 from "../assets/image/doctor-3.jpg";
import gallery05 from "../assets/image/about.jpg";
import gallery06 from "../assets/image/doctor-3.jpg";

const Gallery = () => {
  return (
    <section className="gallery" id="ما_يميزنا">
        <h2 className="section__header">ما يميزنا</h2>
        <p>
          بالتزام ثابت نحو رفاهيتك، يضمن فريقنا من المتخصصين المدربين تدريباً عالياً أنك تتلقى تجارب مرضية استثنائية.
        </p>
      <div className="container">
        <div className="box">
          <div className="image">
            <img src={gallery01} alt="Not Found" />
          </div>
        </div>
        <div className="box">
          <div className="image">
            <img src={gallery02} alt="Not Found" />
          </div>
        </div>
        <div className="box">
          <div className="image">
            <img src={gallery03} alt="Not Found" />
          </div>
        </div>
        <div className="box">
          <div className="image">
            <img src={gallery04} alt="Not Found" />
          </div>
        </div>
        <div className="box">
          <div className="image">
            <img src={gallery05} alt="Not Found" />
          </div>
        </div>
        <div className="box">
          <div className="image">
            <img src={gallery06} alt="Not Found" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
