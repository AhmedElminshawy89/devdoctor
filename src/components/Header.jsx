import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import Drawer from "../components/Drawer";
import logo from "../assets/image/logo.png";

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

  const handleLinkClick = (sectionId) => {
    setActiveSection(sectionId);
    document
      .querySelector(`#${sectionId}`)
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header id="الرئيسية">
        <nav
          className={`${
            isFixed ? "fixed-header" : "section__container nav__container"
          }`}
        >
          <div className="nav__logo" data-aos="fade-down">
            <img src={logo} alt="" />
            احمد <span>شاما </span>
          </div>
          <ul className="nav__links"  data-aos="fade-down">
            <li
              className={`link ${
                activeSection === "الرئيسية" ? "active-link" : ""
              }`}
              onClick={() => handleLinkClick("الرئيسية")}
            >
              <a href="#الرئيسية">الرئيسية</a>
            </li>
            <li
              className={`link ${
                activeSection === "تعرف_علينا" ? "active-link" : ""
              }`}
              onClick={() => handleLinkClick("تعرف_علينا")}
            >
              <a href="#تعرف علينا">تعرف علينا</a>
            </li>
            <li
              className={`link ${
                activeSection === "خدماتنا" ? "active-link" : ""
              }`}
              onClick={() => handleLinkClick("خدماتنا")}
            >
              <a href="#خدماتنا">خدماتنا</a>
            </li>
            <li
              className={`link ${
                activeSection === "اهتمامنا" ? "active-link" : ""
              }`}
              onClick={() => handleLinkClick("اهتمامنا")}
            >
              <a href="#اهتمامنا">اهتمامنا</a>
            </li>
            <li
              className={`link ${
                activeSection === "المواعيد" ? "active-link" : ""
              }`}
              onClick={() => handleLinkClick("المواعيد")}
            >
              <a href="#المواعيد">المواعيد</a>
            </li>
            <li
              className={`link ${
                activeSection === "للتواصل_والحجز" ? "active-link" : ""
              }`}
              onClick={() => handleLinkClick("للتواصل_والحجز")}
            >
              <a href="#للتواصل_والحجز">للتواصل والحجز</a>
            </li>
          </ul>
          <button className="btn btn-bar" onClick={handleDrawerOpen}>
            <FaBars />
          </button>
        </nav>
        <Drawer isOpen={drawerOpen} onClose={handleDrawerClose} />
        <div className="section__container header__container">
          <div className="header__content" data-aos="fade-up" data-aos-delay="500">
            <h1>أحد رواد علاج الألم التداخلي في مصر والعالم العربي</h1>
            <p>
              د أحمد شامه مدرس التخدير وعلاج الألم التداخلي جامعة القاهره - المعهد القومي للأورام 
              استشاري علاج الآلام التداخلي للعمود الفقري والمفاصل وآلام الاورام السرطانيه جامعة القاهرة 
              دكتوراه علاج الألم جامعة القاهرة 
              عضو الجمعيه المصريه لعلاج الألم حيث تعتبر تجارب المرضى الاستثنائية أولويتنا. مع الرعاية
              المتعاطفة، والمرافق المتطورة، والنهج الموجه نحو المريض، نحن
              ملتزمون بصحتك.
            </p>
            <p data-aos="fade-up" data-aos-delay="400">
            {/* دكتور احمد شامه استشاري علاج الآلام المزمنة والعلاج التداخلي
              للعمود الفقري والمفاصل وآلام الأورام السرطانية{" "}
            </p>
            - ماجستير علاج الألم، جامعة القاهرة
            <br />
            - دكتوراه علاج الألم
            <br /> */}
            - عضو الجمعية المصرية لعلاج الألم
            <br />
            ثق بنا في صحتك واستمتع بالفرق.
            </p>
            <a class="btn" href="https://wa.me/+201201818272" target="_blank" data-aos="fade-up" data-aos-delay="300">
              تواصل معنا
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
