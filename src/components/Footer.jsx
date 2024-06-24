import {
  FaInstagram,
  FaFacebookF,
  FaHeart,
  FaTwitter,
  FaMapPin,
  FaEnvelope,
  FaPhone,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="section__container footer__container">
        <div className="footer__col">
          <h3>
            احمد<span> شامه</span>
          </h3>
          <p>
            نحن فخورون بأن نكون جزءًا من رحلتك الصحية ونلتزم بتقديم رعاية
            متعاطفة، مخصصة وعالية الجودة في كل خطوة على الطريق.
          </p>
          <p>
            ثق بنا في صحتك، ودعنا نعمل معًا لتحقيق أفضل النتائج الممكنة لك
            ولأحبائك.
          </p>
        </div>
        <div className="footer__col">
          <h4>معلومات عنا</h4>
          <li className={`link`}>
            <a href="#الرئيسية">الرئيسية</a>
          </li>
          <li className={`link `}>
            <a href="#تعرف_علينا">تعرف علينا</a>
          </li>
          <li className={`link`}>
            <a href="#خدماتنا">خدماتنا</a>
          </li>
          <li className={`link `}>
            <a href="#اهتمامنا">اهتمامنا</a>
          </li>
          <li className={`link `}>
            <a href="#المواعيد">المواعيد</a>
          </li>
          <li className={`link `}>
            <a href="#للتواصل_والحجز">للتواصل والحجز</a>
          </li>
        </div>
        {/* <div className="footer__col">
          <h4>الخدمات</h4>
          <p>شروط البحث</p>
          <p>البحث المتقدم</p>
          <p>سياسة الخصوصية</p>
          <p>الموردين</p>
          <p>متاجرنا</p>
        </div> */}
        <div className="footer__col">
          <h4>العناوين</h4>
          <p>
            <FaMapPin /> المقطم - شارع ٩ - عيادات شارع ٩ - الدور التالت - مركز
            الأفق الطبي
          </p>
          <p>
            <FaMapPin /> التجمع الخامس شارع التسعين الشمالي مول cmc الطبي الدور
            الثالث عياده ٣٢٨
          </p>
          <p>
            <FaMapPin /> شبين الكوم مستشفى الرازي - شارع صبري أبو علم نهاية شارع
            الشهداء - برج أجياد المدينه
          </p>
        </div>
        <div className="footer__col">
          <h4>اتصل بنا</h4>
          <p>
            <FaPhone /> 01201818272
          </p>
          <p>
            <FaWhatsapp /> 01201818272
          </p>
        </div>
      </div>
      <div className="footer__bar">
        <div className="footer__bar__content">
          <p>حقوق النشر © 2024 جميع الحقوق محفوظة.</p>
          <div className="footer__socials">
            <span>
              <a href="https://www.instagram.com/drahmedshamaa" target="_blank">
                <FaInstagram />
              </a>
            </span>
            <span>
              <a href="https://www.facebook.com/drahmedshamaa" target="_blank">
                <FaFacebookF />
              </a>
            </span>
            <span>
              <a
                href="https://www.youtube.com/@drAhmedshamaa
"
                target="_blank"
              >
                <FaYoutube />
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
