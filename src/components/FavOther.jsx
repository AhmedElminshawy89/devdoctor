import { FaHandHoldingHeart, FaTruck, FaHospital } from 'react-icons/fa';
import doc from '../assets/image/choose-us.jpg';

const FavOther = () => {
  return (
    <section className="section__container why__container" id='اهتمامنا'>
      <div className="why__image">
        <img src={doc} alt="لماذا تختارنا" />
      </div>
      <div className="why__content">
        <h2 className="section__header">لماذا تختارنا</h2>
        <p>
          بالتزام ثابت نحو رفاهيتك، يضمن فريقنا من المتخصصين المدربين تدريباً عالياً أنك تتلقى تجارب مرضية استثنائية.
        </p>
        <div className="why__grid">
          <span><FaHandHoldingHeart /></span>
          <div>
            <h4>الرعاية المكثفة</h4>
            <p>
              وحدة العناية المركزة لدينا مجهزة بتكنولوجيا متقدمة ويشرف عليها فريق من المهنيين.
            </p>
          </div>
          <span><FaTruck /></span>
          <div>
            <h4>سيارة إسعاف مجهزه</h4>
            <p>
              مبادرة متعاطفة تهدف إلى إعطاء الأولوية لصحتك ورفاهيتك دون أي مخاوف من التجهيز بالسياره.
            </p>
          </div>
          <span><FaHospital /></span>
          <div>
            <h4>الخدمات الطبية والجراحية</h4>
            <p>
              خدماتنا الطبية والجراحية تقدم حلولاً صحية متقدمة لتلبية الاحتياجات الطبية.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FavOther;
