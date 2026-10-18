import './Navbar.css'
import MiradoLogo from '../../assets/miradologo2.svg'
import Search from '../../icons/Search'
import Heart from '../../icons/Heart'
import Cart from '../../icons/Cart'
export default function Navbar() {
  return (
    <div className="navbar">
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
    </div>
    </div>
  )
}