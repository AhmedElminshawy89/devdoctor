import { FaPhoneAlt } from "react-icons/fa";

const ContactPhone = () => {
  return (
    <div className="contactPhone-btn-wrapper">
      <a href="tel:+"
      target="_blank" rel="noreferrer">
        <FaPhoneAlt />
      </a>
    </div>
  );
};

export default ContactPhone;
