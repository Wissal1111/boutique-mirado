import Cart2 from '../../icons/Cart2';
import Heart from '../../icons/Heart';
import './Item.css';

export default function Item({ item }) {
  const hasDiscount = item.discount > 0;
  const finalPrice = hasDiscount
    ? Math.round(item.price * (1 - item.discount / 100))
    : item.price;

  return (
    <div className="item">
      <Heart />
      <div className="image">
        <img src={item.image} alt={item.name} />
      </div>
      {item.isNew && <h3 className="nouveau">Nouveau</h3>}
      {hasDiscount && <h3 className="nouveau">-{item.discount}%</h3>}

      <span>{item.name}</span>

      <div className="price">
        <h3 className="current-price">{finalPrice} DA</h3>
        {hasDiscount && <s className="old-price">{item.price} DA</s>}
      </div>

      <div className="item-btns">
        <button className="ajouter">
          <Cart2 />
        </button>
        <button className="commander">Commander</button>
      </div>
    </div>
  );
}