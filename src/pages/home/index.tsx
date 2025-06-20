import Wisky from "../../components/wisky/Wisky";
import AboutPage from "../about/about";
import ContactPage from "../contact/contact";
import FooterPage from "../footer/footer";
import InfoPage from "../info/info";
import MenuPage from "../menu/menu";
import Navbar from "../navbar/navbar";

const HomeLayout = () => {
  return (
    <div className="min-h-screen flex justify-center item-center  bg-white font-sans">
      <div className="w-screen max-w-screen-2xl">
        <Navbar />
        <AboutPage />
        <MenuPage />
        <Wisky />
        <InfoPage />
        <ContactPage />
        <FooterPage />
      </div>
    </div>
  );
};

export default HomeLayout;
