import './Navbar.css'
import MiradoLogo from '../../assets/miradologo2.svg'
import Search from '../../icons/Search'
import Heart from '../../icons/Heart'
import Cart from '../../icons/Cart'
import Menu from '../../icons/Menu'
import { useState } from 'react'
export default function Navbar() {
    const [ isMenuOpen, setIsMenuOpen ] = useState(false);
    function handleMenuClick() {
        setIsMenuOpen(!isMenuOpen);
    }

  return (
    <><div className="navbar">
    <div className="leftside">
        <img src={MiradoLogo} alt="MiradoLogo" />
    <ul>
        <li>Accueil</li>
        <li>Boutique</li>
        <li>Nouveautés</li>
        <li>Promotions</li>
        <li>À propos</li>
        <li>Contact</li>
    </ul>
    </div>
    <div className="rightside">
       <div className="search">
         <input type="text" placeholder="Rechercher..." />
         <Search/>
       </div>
       <Heart/>
       <Cart/>
       <Menu onclick={handleMenuClick}/>
    </div>
    </div>
    <div className={`sandwich-menu ${isMenuOpen ? "open" : ""}`}>
    <ul>
        <li>Accueil</li>
        <li>Boutique</li>
        <li>Nouveautés</li>
        <li>Promotions</li>
        <li>À propos</li>
        <li>Contact</li>
    </ul>
</div>
  </>)
}