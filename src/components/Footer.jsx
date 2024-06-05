import { FaInstagram, FaFacebookF, FaHeart, FaTwitter, FaMapPin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="section__container footer__container">
        <div className="footer__col">
          <h3>الرعاية<span>الصحية</span></h3>
          <p>
            نحن فخورون بأن نكون جزءًا من رحلتك الصحية ونلتزم بتقديم رعاية متعاطفة، مخصصة وعالية الجودة في كل خطوة على الطريق.
          </p>
          <p>
            ثق بنا في صحتك، ودعنا نعمل معًا لتحقيق أفضل النتائج الممكنة لك ولأحبائك.
          </p>
        </div>
        <div className="footer__col">
          <h4>معلومات عنا</h4>
          <p>الرئيسية</p>
          <p>معلومات عنا</p>
          <p>العمل معنا</p>
          <p>مدونتنا</p>
          <p>الشروط والأحكام</p>
        </div>
        <div className="footer__col">
          <h4>الخدمات</h4>
          <p>شروط البحث</p>
          <p>البحث المتقدم</p>
          <p>سياسة الخصوصية</p>
          <p>الموردين</p>
          <p>متاجرنا</p>
        </div>
        <div className="footer__col">
          <h4>اتصل بنا</h4>
          <p>
            <FaMapPin /> القاهره
          </p>
          <p><FaEnvelope /> ahmed@.com</p>
          <p><FaPhone /> (+012) 3456 789</p>
        </div>
      </div>
      <div className="footer__bar">
        <div className="footer__bar__content">
          <p>حقوق النشر © 2024 جميع الحقوق محفوظة.</p>
          <div className="footer__socials">
            <span><FaInstagram /></span>
            <span><FaFacebookF /></span>
            <span><FaHeart /></span>
            <span><FaTwitter /></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
