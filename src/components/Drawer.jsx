import { FaFacebook, FaInstagram, FaTimes, FaTwitter } from 'react-icons/fa';

const Drawer = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && <div className="overlay" onClick={onClose}></div>}
      <div className={`drawer ${isOpen ? "open" : ""}`}>
        <div className="drawer__header">
        <div className="nav__logo">
          احمد {" "}<span>شاما </span>
          </div>
          <button className="drawer__close" onClick={onClose}>
            <FaTimes />
          </button>
        </div>
        <ul>
          <li>
            <a href="#">الرئيسية</a>
          </li>
          <li>
            <a href="#">معلومات عنا</a>
          </li>
          <li>
            <a href="#">الخدمات</a>
          </li>
          <li>
            <a href="#">صفحات</a>
          </li>
          <li>
            <a href="#">المدونة</a>
          </li>
        </ul>
        <div className="drawer__socials">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
        </div>
      </div>
    </>
  );
};

export default Drawer;
