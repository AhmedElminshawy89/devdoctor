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
        <li className={`link `}
          >
              <a href="#الرئيسية">الرئيسية</a>
            </li>
            <li className={`link `}
            
            >
              <a href="#تعرف علينا">تعرف علينا</a>
            </li>
            <li className={`lin`}
            >
              <a href="#خدماتنا">خدماتنا</a>
            </li>
            <li className={`link`}
            >
              <a href="#اهتمامنا">اهتمامنا</a>
            </li>
            <li className={`link `}
            >
              <a href="#ما يميزنا">ما يميزنا</a>
            </li>
            <li className={`link `}
            >
              <a href="#المواعيد">المواعيد</a>
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
