import './Accueil.css'
import homeimage from '../../assets/homeimage.webp'
export default function Accueil() {
  return (
    <div className="accueil" id='accueil'>
        <div className="content">
        <h1>Confort & Élégance </h1>
          <span>Pyjamas et bad3iya, des pièces soigneusement choisies pour vous faire plaisir.</span>
          <button className="btn-pink">Découvrir la collection →</button>
     </div>
     <img src= {homeimage} alt="homeimage"></img>
     <div className="overlay">
     
     </div>
    </div>
  )
}