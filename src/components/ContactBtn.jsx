import { FaWhatsapp } from "react-icons/fa";

const ContactBtn = () => {
  return (
    <div className="contact-btn-wrapper">
      <a href="https://wa.me/01201818272" target="_blank" rel="noreferrer">
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default ContactBtn;
