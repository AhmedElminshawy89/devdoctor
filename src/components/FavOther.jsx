import { FaHandHoldingHeart } from "react-icons/fa";
import doc from "../assets/image/dr4.jpg";
import { TiGroup } from "react-icons/ti";
import { MdCleanHands } from "react-icons/md";

const FavOther = () => {
  return (
    <section className="section__container why__container" id="اهتمامنا">
      <div className="why__image">
        <img src={doc} alt="لماذا تختارنا" />
      </div>
      <div className="why__content">
        <h2 className="section__header">لماذا تختارنا</h2>
        <p>
          بالتزام ثابت نحو رفاهيتك، يضمن فريقنا من المتخصصين المدربين تدريباً
          عالياً أنك تتلقى تجارب مرضية استثنائية.
        </p>
        <div className="why__grid">
          <span>
            <FaHandHoldingHeart />
          </span>
          <div>
            <h4>راحه المريض</h4>
            <p>راحة المريض هي أولويتنا القصوى في كل خطوة نقوم بها.</p>
          </div>
          <span>
            <TiGroup />
          </span>
          <div>
            <h4>طاقم طبي متكامل</h4>
            <p>طاقم طبي متكامل يضم أطباء وممرضين متخصصين في رعاية الصحة.</p>
          </div>
          <span>
            <MdCleanHands />
          </span>
          <div>
            <h4>التعقيم المستمر والنظافه</h4>
            <p>التعقيم المستمر والنظافة هما جزء أساسي من رعايتنا للمرضى.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FavOther;
