import Handheart from '../../icons/Handheart'
import Headphone from '../../icons/Headphone'
import Money from '../../icons/Money'
import Truck from '../../icons/Truck'
import './About.css'
export default function About(){
    return(
        <div className="about" id='about'>
            <ul>
                <li>
                    <Truck/>
                    <h3>Livraison rapide</h3>
                    <span>Toutes les wilayas</span>
                </li>
                <li>
                    <Money/>
                    <h3>Paiment à la livraison</h3>
                    <span>Ou via Whatsapp</span>
                </li>
                <li>
                    <Headphone/>
                    <h3>Service client</h3>
                    <span>À votre écoute</span>
                </li>
                <li>
                    <Handheart/>
                    <h3>Produit de qualité</h3>
                    <span>Séléctionées avec soin</span>
                </li>
            </ul>
        </div>
    )
}