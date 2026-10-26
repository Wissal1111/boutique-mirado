import Display from "../components/Display/Display";
import Filter from "../components/Filter/Filter";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import './Boutique.css'

export default function Boutique() {
  return (
    <div>
        <Header/>
         <Navbar/>
        <h3 className="nos-produits">Nos Produits</h3>

        <div className="boutique">
          <div className="left-boutique">
            <h3>Nos Produits</h3>
            <Filter/>
          </div>

          <div className="right-boutique">

            <Display/>
          </div>
        </div>
    </div>
  )
}