import { FaBars } from "react-icons/fa";
import { useState, useEffect } from "react";
import Drawer from "../components/Drawer";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [activeSection, setActiveSection] = useState("الرئيسية");

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }

    const sections = document.querySelectorAll("header, section");
    let currentSection = "الرئيسية";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (window.scrollY >= sectionTop - 60) {
        currentSection = section.getAttribute("id");
      }
    });

    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleLinkClick = (sectionId) => {
    setActiveSection(sectionId);
    document.querySelector(`#${sectionId}`).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <header id="الرئيسية">
        <nav className={`${isFixed ? "fixed-header" : "section__container nav__container"}`}>
          <div className="nav__logo">
            احمد <span>شاما </span>
          </div>
          <ul className="nav__links">
            <li className={`link ${activeSection === "الرئيسية" ? "active-link" : ""}`}
            onClick={() => handleLinkClick("الرئيسية")}>
              <a href="#الرئيسية">الرئيسية</a>
            </li>
            <li className={`link ${activeSection === "تعرف_علينا" ? "active-link" : ""}`}
            onClick={() => handleLinkClick("تعرف_علينا")}>
              <a href="#تعرف علينا">تعرف علينا</a>
            </li>
            <li className={`link ${activeSection === "خدماتنا" ? "active-link" : ""}`}
            onClick={() => handleLinkClick("خدماتنا")}>
              <a href="#خدماتنا">خدماتنا</a>
            </li>
            <li className={`link ${activeSection === "اهتمامنا" ? "active-link" : ""}`}
            onClick={() => handleLinkClick("اهتمامنا")}>
              <a href="#اهتمامنا">اهتمامنا</a>
            </li>
            <li className={`link ${activeSection === "ما_يميزنا" ? "active-link" : ""}`}
            onClick={() => handleLinkClick("ما_يميزنا")}>
              <a href="#ما يميزنا">ما يميزنا</a>
            </li>
            <li className={`link ${activeSection === "المواعيد" ? "active-link" : ""}`}
            onClick={() => handleLinkClick("المواعيد")}>
              <a href="#المواعيد">المواعيد</a>
            </li>
          </ul>
          <button className="btn btn-bar" onClick={handleDrawerOpen}>
            <FaBars />
          </button>
        </nav>
        <Drawer isOpen={drawerOpen} onClose={handleDrawerClose} />
        <div className="section__container header__container">
          <div className="header__content">
            <h1>توفير تجربة استثنائية للمرضى</h1>
            <p>
              مرحبًا، حيث تعتبر تجارب المرضى استثنائية أولويتنا. مع الرعاية
              المتعاطفة، والمرافق على أحدث طراز، والنهج الموجه نحو المريض، نحن
              ملتزمون بصحتك. ثق بنا في صحتك واستمتع بالفرق.
            </p>
            <button className="btn">رؤية الخدمات</button>
          </div>
          <div className="header__form">
            <form>
              <h4>احجز الآن</h4>
              <input type="text" placeholder="الاسم الأول" />
              <input type="text" placeholder="الاسم الأخير" />
              <input type="text" placeholder="العنوان" />
              <input type="text" placeholder="رقم الهاتف" />
              <button className="btn form__btn">حجز موعد</button>
            </form>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
