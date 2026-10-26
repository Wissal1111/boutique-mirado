import './ItemDetails.css'
import Heart from '../../icons/Heart'
import Cart2 from '../../icons/Cart2';
export default function ItemDetails({item}){
  const hasDiscount = item.discount > 0;
  const finalPrice = hasDiscount
    ? Math.round(item.price * (1 - item.discount / 100))
    : item.price;

    return(
        <div className="item-details">
            <Heart />

            <div className="big-img">
                    <img src={item.image} alt={item.name} />
                
            </div>
            <div className="other-imgs">
                    <img src={item.image} alt={item.name} />
                    <img src={item.image} alt={item.name} />
                    <img src={item.image} alt={item.name} />

            </div>
                 <div className="informations">
                   <h2>{item.name}</h2>

                     {item.isNew && <h3 className="nouveau">Nouveau</h3>}
            
            
                  <div className="price">
                    <h3 className="current-price">{finalPrice} DA</h3>
                    {hasDiscount && <s className="old-price">{item.price} DA</s>}
                  </div>
                  <label>Taille</label>
                  <div className="taille">
                    <div className="t-square checked">S</div>
                    <div className="t-square">M</div>
                    <div className="t-square">L</div>
                    <div className="t-square">XL</div>
                    <div className="t-square">XXL</div>
                    <div className="t-square">XXXL</div>
                  </div>
                  <label>Couleurs</label>

            
                  <div className="item-btns">
                    <button className="ajouter">
                      <Cart2 />
                    </button>
                    <button className="commander">Commander</button>
                  </div>
                 </div>
        </div>
    )
}