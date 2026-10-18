import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Accueil from "../components/Accueil/Accueil";

export default function Landing() {
  return (
    <div className="landing">
         <Header/>
         <Navbar/>
         <Accueil/>
    </div>
  )
}