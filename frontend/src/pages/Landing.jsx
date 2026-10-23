import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Accueil from "../components/Accueil/Accueil";
import Collection from "../components/Collection/Collection";
import Items from "../components/Items/Items";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";

export default function Landing() {
  return (
    <div className="landing">
         <Header/>
         <Navbar/>
         <Accueil/>
         <Collection/>
         <Items/>
         <About/>
         <Footer/>
    </div>
  )
}