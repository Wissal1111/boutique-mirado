import Display from "../components/Display/Display";
import Filter from "../components/Filter/Filter";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import FilterIcon from "../icons/FilterIcon";
import FilterPopUp from "../components/FilterPopUp/FilterPopUp";
import { useState } from "react";
import './Boutique.css'
import Footer from "../components/Footer/Footer";

export default function Boutique() {
  const [showFilterPopUp,setShowFilterPopUp]=useState(false);
  return (
    <div>
        <Header/>
         <Navbar />
         {showFilterPopUp && <FilterPopUp onClose={()=>setShowFilterPopUp(false)} />}
        <h3 className="nos-produits">Nos Produits</h3>
        <div className="filtering">
          <button onClick={()=>setShowFilterPopUp(true)}>Filter<FilterIcon/></button>
          </div>

        <div className="boutique">
          <div className="left-boutique">
            <h3>Nos Produits</h3>
            <Filter/>
          </div>

          <div className="right-boutique">
           
            <Display/>
          </div>
        </div>
        <Footer/>
    </div>
  )
}