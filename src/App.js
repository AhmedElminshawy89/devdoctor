import AboutUs from "./components/AboutUs";
import Appointment from "./components/Appointment";
import ContactBtn from "./components/ContactBtn";
import ContactPhone from "./components/ContactPhone";
import Gallery from "./components/ContactWithoutForm";
import FavOther from "./components/FavOther";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import ScrollTopBtn from "./components/ScrollTopBtn";
import SecServices from "./components/SecServices";
import Services from "./components/Services";
function App() {
  return (
    <>
      <Header />
      <Services />
      <AboutUs />
      <SecServices/>
      <ScrollTopBtn />
      <FavOther />
      <Appointment/>
      <Form/>
      <Footer /> 
      <ContactBtn />
      <ContactPhone />
    </>
  );
}

export default App;
