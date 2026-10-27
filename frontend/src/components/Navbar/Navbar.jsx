import './Navbar.css'
import MiradoLogo from '../../assets/miradologo2.svg'
import Search from '../../icons/Search'
import Cart from '../../icons/Cart'
import Menu from '../../icons/Menu'
import { useState } from 'react'
import { Link } from 'react-router-dom'
function List({page,setIsMenuOpen}){
  return(
    <>
    {page=='landing'? 
    <ul>
       <a href="/#accueil" onClick={()=>setIsMenuOpen(false)}> <li>Accueil</li></a>
        <Link to="/boutique" onClick={()=>setIsMenuOpen(false)}><li>Boutique</li></Link>
        <a href="/#nouveautes" onClick={()=>setIsMenuOpen(false)}><li>Nouveautés</li></a>
        <a href="/#promotions" onClick={()=>setIsMenuOpen(false)}><li>Promotions</li></a>
       <a href="/#about" onClick={()=>setIsMenuOpen(false)}> <li>À propos</li></a>
        <a href="/#contact" onClick={()=>setIsMenuOpen(false)}><li>Contact</li></a>
    </ul>:
    <ul>
       <a href="/" onClick={()=>setIsMenuOpen(false)}> <li>Accueil</li></a>
        <Link to="/boutique" onClick={()=>setIsMenuOpen(false)}><li>Boutique</li></Link>
        <a href="/nouveautes" onClick={()=>setIsMenuOpen(false)}><li>Nouveautés</li></a>
        <a href="/promotions" onClick={()=>setIsMenuOpen(false)}><li>Promotions</li></a>
        <a href="#contact" onClick={()=>setIsMenuOpen(false)}><li>Contact</li></a>
    </ul>
    }</>
  )
}

export default function Navbar({page}) {
    const [ isMenuOpen, setIsMenuOpen ] = useState(false);
    function handleMenuClick() {
        setIsMenuOpen(!isMenuOpen);
    }

  return (
    <><div className="navbar">
    <div className="leftside">
        <img src={MiradoLogo} alt="MiradoLogo" />
    <List page={page} setIsMenuOpen={setIsMenuOpen}/>
    </div>
    <div className="rightside">
       <div className="search">
         <input type="text" placeholder="Rechercher..." />
         <Search/>
       </div>
       <Cart/>
       <Menu onclick={handleMenuClick}/>
    </div>
    </div>
    <div className={`sandwich-menu ${isMenuOpen ? "open" : ""}`}>
    <List page={page} setIsMenuOpen={setIsMenuOpen}/>
    
   
</div>
  </>)
}