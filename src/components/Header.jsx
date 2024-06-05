import { FaBars } from "react-icons/fa";
import { useState } from "react";
import Drawer from "../components/Drawer"

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <header>
        <nav className="section__container nav__container">
          <div className="nav__logo">
          احمد {" "}<span>شاما </span>
          </div>
          <ul className="nav__links">
            <li className="link">
              <a href="#">الرئيسية</a>
            </li>
            <li className="link">
              <a href="#">معلومات عنا</a>
            </li>
            <li className="link">
              <a href="#">الخدمات</a>
            </li>
            <li className="link">
              <a href="#">صفحات</a>
            </li>
            <li className="link">
              <a href="#">المدونة</a>
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
