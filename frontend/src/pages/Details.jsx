import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import ItemDetails from "../components/ItemDetails/ItemDetails";
import bad2img from "../assets/bad2.png"
import './Boutique.css'

export default function Details() {
    const item=    { id: 4, name: 'Bad3iya', price: 3500, image: bad2img, isNew: true, discount: 30 };
    
  return (
    <div>
        <Header/>
         <Navbar/>

        <div className="details">
            <ItemDetails item={item}/>
         
        </div>
    </div>
  )
}