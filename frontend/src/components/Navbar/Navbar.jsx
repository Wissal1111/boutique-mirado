import './Navbar.css'
import MiradoLogo from '../../assets/miradologo2.svg'
import Search from '../../icons/Search'
import Heart from '../../icons/Heart'
import Cart from '../../icons/Cart'
import Menu from '../../icons/Menu'
import { useState } from 'react'
import { Link } from 'react-router-dom'

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
       <a href="/#accueil"> <li>Accueil</li></a>
        <Link to="/boutique"><li>Boutique</li></Link>
        <a href="/#nouveautes"><li>Nouveautés</li></a>
        <a href="/#promotions"><li>Promotions</li></a>
       <a href="/#about"> <li>À propos</li></a>
        <a href="/#contact"><li>Contact</li></a>
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
       <a href="/#accueil" onClick={()=>setIsMenuOpen(false)}> <li>Accueil</li></a>
        <Link to="/boutique" onClick={()=>setIsMenuOpen(false)}><li>Boutique</li></Link>
        <a href="/#nouveautes" onClick={()=>setIsMenuOpen(false)}><li>Nouveautés</li></a>
        <a href="/#promotions" onClick={()=>setIsMenuOpen(false)}><li>Promotions</li></a>
       <a href="/#about" onClick={()=>setIsMenuOpen(false)}> <li>À propos</li></a>
        <a href="/#contact" onClick={()=>setIsMenuOpen(false)}><li>Contact</li></a>
    </ul>
</div>
  </>)
}