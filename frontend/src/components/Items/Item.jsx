import Cart2 from '../../icons/Cart2';
import Heart from '../../icons/Heart';
import './Item.css';
export default function Item({ item }) {
  return (
    <div className="item">
        <Heart/>
      <img src={item.image} alt={item.name} />
      <h3 className="nouveau">Nouveau</h3>
      <span>{item.name}</span>
      <h3>{item.price} DA</h3>
      <div className="item-btns">
        <button className="commander">
            Commander
        </button>
        <button className="ajouter">
          <Cart2/>  
        </button>
      </div>
    </div>
  );
}